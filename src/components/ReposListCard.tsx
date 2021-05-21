import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors, { GithubColors } from '../constants/Colors'
import Fonts from '../constants/Fonts'
import { convertDateFormat, trimHighNumbers } from '../config'
import { AntDesign, Octicons } from '@expo/vector-icons';

interface IReposListCard {
    data: any,
    openDetailScreen: any
}

export default class ReposListCard extends React.Component<IReposListCard>{
    setBottomDetails: any = (item: any) => {
        const details = [
            {
                detail: item.language, extra: <View style={[styles.languageColorContainer, {
                    backgroundColor: GithubColors[item.language]
                }]} />
            },
            {
                detail: trimHighNumbers(item.stargazers_count), extra: <AntDesign name="star" size={14} color={Colors.yellowSea} />
            },
            {
                detail: trimHighNumbers(item.forks), extra: <AntDesign name="fork" size={14} color={Colors.lochmara} />
            },
            {
                detail: trimHighNumbers(item.open_issues), extra: <Octicons name="issue-opened" size={14} color={Colors.red} />
            }]
        return details.map(value => {
            if (!value.detail) return null
            return <View style={styles.innerBottomCardContainer}>
                {value.extra}
                <Text style={styles.innerBottomText}>{value.detail}</Text>
            </View>
        })

    }
    render() {
        const { data, openDetailScreen } = this.props
        const splitFullName = data.full_name.split('/')
        return <TouchableOpacity onPress={() => openDetailScreen(data.id)} activeOpacity={0.6} style={styles.cardContainer}>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
            }}>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontFamily: Fonts.regular, fontSize: 17, color: Colors.lochmara }}>{splitFullName[0]}/<Text style={{ fontFamily: Fonts.bold }}>{splitFullName[1]}</Text></Text>
                    <Text
                        style={{
                            marginVertical: 5,
                            fontFamily: Fonts.regular,
                            fontSize: 13,
                            color: Colors.gray
                        }}>Built by <Text
                            style={{
                                fontFamily: Fonts.bold
                            }}>{data.owner.login}</Text> in {convertDateFormat(data.created_at)} </Text>
                    <Text
                        style={{
                            fontFamily: Fonts.regular,
                            fontSize: 12,
                            color: Colors.lochmara
                        }}>{data.description}</Text>
                </View>
                <View
                    style={{
                        marginLeft: 20,
                        alignSelf: 'stretch',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                    <Image
                        source={{ uri: data.owner.avatar_url }}
                        style={{ height: 70, width: 70, borderRadius: 35 }}
                        resizeMode='contain' />
                </View>
            </View>
            <View style={styles.bottomCardContainer}>
                {this.setBottomDetails(data)}
            </View>
        </TouchableOpacity >
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    bottomCardContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: Colors.lightGray,
        borderTopWidth: 1,
        marginTop: 15,
        paddingTop: 15
    },
    innerBottomCardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerBottomText: {
        fontFamily: Fonts.semiBold,
        fontSize: 16,
        color: Colors.gray,
        marginLeft: 5
    },
    languageColorContainer: {
        height: 10,
        width: 10,
        borderRadius: 5
    }
})