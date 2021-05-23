import { AntDesign, Entypo } from '@expo/vector-icons';
import * as React from 'react';
import { FlatList, Image, Platform, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpecificInfoList from '../components/SpecificInfoList';
import { convertDateFormat, listOfLinks, listOfRepoDetails } from '../helper.config';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { FavoriteRepoInterface, ReposInterface } from '../redux/types';
import NoElementComponent from '../components/NoElement';

interface IDetailProps {
    allRepos: ReposInterface[]
    favoriteRepos: FavoriteRepoInterface[]
    addRepoToFavoriteList: any
    removeRepoFromFavoriteList: any
    route: any
    navigation: {
        navigate: any
    }
}
interface IDetailState {
    repository: any
}


export default class DetailsScreen extends React.Component<IDetailProps, IDetailState>{
    state: IDetailState = {
        repository: null
    }
    componentDidMount() {
        const { allRepos, route: { params: { itemId } } } = this.props
        const repository = allRepos.find((value: any) => value.id === itemId)
        this.setState({ repository })
    }
    _specificInfo = ({ item }: any) => {
        return <SpecificInfoList info={item} />
    }
    _setDetails = () => {
        const { repository } = this.state
        return <View>
            <Text style={styles.innerTitles}>Description</Text>
            <Text style={styles.paragraphs}>{repository.description}</Text>
            <Text style={styles.innerTitles}>Information</Text>
            <FlatList
                keyExtractor={() => Math.random().toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 5 }}
                data={listOfRepoDetails(repository)}
                renderItem={this._specificInfo}
            />
            <Text style={styles.innerTitles}>For more visit</Text>
            <FlatList
                keyExtractor={() => Math.random().toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 5 }}
                data={listOfLinks(repository)}
                renderItem={this._specificInfo}
            />
        </View>
    }
    handlePress = (value: boolean) => {
        const { repository } = this.state
        const { addRepoToFavoriteList, removeRepoFromFavoriteList, navigation } = this.props
        if (!value) {
            addRepoToFavoriteList(repository);
            (window as any).showToast({
                type: 'success',
                message: 'Added to your favorite list',
                status: true,
                navigate: () => navigation.navigate('Favorites')
            });
        }
        else {
            removeRepoFromFavoriteList(repository.id);
            (window as any).showToast({
                type: 'info',
                message: 'Removed from your favorite list',
                status: true
            });
        }
    }
    onShare = async () => {
        const { repository } = this.state
        try {
            await Share.share({
                title: repository.full_name,
                url: repository.html_url,
                message: Platform.OS === 'android' ? repository.html_url : repository.description,
            }, { dialogTitle: repository.description });
        } catch (error) {
            alert(error.message);
        }
    };
    _setHeader = () => {
        const { repository } = this.state
        const { favoriteRepos, route: { params: { itemId } } } = this.props
        const isFavorite = favoriteRepos.some((item: any) => item.id === itemId)
        const splitFullName = repository.full_name.split('/')
        return <View style={styles.headerContainer}>
            <Image source={{ uri: repository.owner.avatar_url }} style={styles.image} />
            <View style={styles.headerDetailsContainer}>
                <Text style={styles.headerTitleText}>{splitFullName[0]}/<Text style={{ fontFamily: Fonts.bold }}>{splitFullName[1]}</Text></Text>
                <Text style={styles.creationDateText}>Built in {convertDateFormat(repository.created_at)}</Text>
                <Text style={styles.updateDateText}>Last update on {convertDateFormat(repository.update_at)}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        style={{
                            paddingVertical: 10
                        }}
                        activeOpacity={0.7}
                        onPress={() => this.handlePress(isFavorite)}>
                        <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={30} color={isFavorite ? Colors.red : Colors.lochmara} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        style={{
                            marginLeft: 25,
                            padding: 10
                        }}
                        activeOpacity={0.7}
                        onPress={() => this.onShare()}>
                        <Entypo name="share" size={30} color={Colors.lochmara} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }
    render() {
        if (!this.state.repository) return <NoElementComponent text='No data, please refresh' isRefresh={true} />
        const Elements = [
            this._setHeader(),
            this._setDetails()
        ]
        return (
            <>
                <View style={styles.pinSegment}>
                    <View style={styles.segment} />
                </View>
                <ScrollView style={styles.container} bounces={false}>
                    {Elements}
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    updateDateText: {
        fontFamily: Fonts.regular,
        fontSize: 15,
        color: Colors.gray,
        marginTop: 10
    },
    creationDateText: {
        fontFamily: Fonts.bold,
        fontSize: 15,
        color: Colors.gray,
        marginTop: 5
    },
    headerTitleText: {
        fontFamily: Fonts.regular,
        fontSize: 25,
        color: Colors.lochmara
    },
    headerDetailsContainer: {
        marginLeft: 40,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    pinSegment: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonFavorites: {
        backgroundColor: Colors.white,
        alignSelf: 'flex-start',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2
    },
    segment: {
        height: 5,
        width: 62,
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: Colors.lightGray,
        borderRadius: 3.5,
    },
    innerTitles: {
        fontFamily: Fonts.semiBold,
        fontSize: 22,
        color: Colors.darkGray,
        paddingVertical: 10
    },
    paragraphs: {
        fontFamily: Fonts.regular,
        fontSize: 17,
        color: Colors.darkGray,
        marginBottom: 10
    }
});
