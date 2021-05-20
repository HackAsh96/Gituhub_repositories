import * as React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpecificInfoList from '../components/SpecificInfoList';
import { convertDateFormat, listOfRepoDetails } from '../config';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { ReposInterface } from '../redux/types';

interface IDetailProps {
    allRepos: ReposInterface[]
    addRepoToFavoriteList: any
    removeRepoFromFavoriteLista: any
    route: any
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
        </View>
    }
    _setHeader = () => {
        const { repository } = this.state
        const { addRepoToFavoriteList, removeRepoFromFavoriteLista } = this.props
        const splitFullName = repository.full_name.split('/')
        return <View style={{ flex: 1, flexDirection: 'row', marginVertical: 20, borderBottomWidth: 1, paddingBottom: 30, borderBottomColor: Colors.lightGray, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: repository.owner.avatar_url }} style={{ height: 100, width: 100, borderRadius: 50 }} />
            <View style={{ marginLeft: 40, flex: 1, justifyContent: 'center', alignSelf: 'stretch' }}>
                <Text style={{ fontFamily: Fonts.regular, fontSize: 25, color: Colors.lochmara }}>{splitFullName[0]}/<Text style={{ fontFamily: Fonts.bold }}>{splitFullName[1]}</Text></Text>
                <Text style={{ fontFamily: Fonts.semiBold, fontSize: 15, color: Colors.gray, marginTop: 5 }}>Built in {convertDateFormat(repository.created_at)}</Text>
                <TouchableOpacity style={styles.buttonFavorites} activeOpacity={0.7} onPress={() => addRepoToFavoriteList(repository)}>
                    <Text style={{ padding: 10, fontFamily: Fonts.bold, fontSize: 15, color: Colors.lochmara }}>Add to favorites</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
    _setRepoLinks = () => {
        return null
    }
    render() {
        if (!this.state.repository) return null //to replace with emptyScreen component
        const Elements = [
            this._setHeader(),
            this._setDetails(),
            this._setRepoLinks()
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
        alignSelf: 'flex-start',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: Colors.white,
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
