import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors, { GithubColors } from '../constants/Colors'
import Fonts from '../constants/Fonts'
import { convertDateFormat, trimHighNumbers } from '../config'
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons';

interface ISpecificInfoList {
    info: {
        name: string,
        detail: string | number
    }
}

export default class SpecificInfoList extends React.Component<ISpecificInfoList>{
    render() {
        const { info } = this.props
        if (!info.detail) return null
        switch (info.name) {
            case 'stars':
                return <View style={styles.detailCard}>
                    <AntDesign name="star" size={45} color={Colors.yellowSea} />
                    <Text style={styles.text}>{info.detail}</Text>
                </View>
            case 'forks':
                return <View style={styles.detailCard}>
                    <AntDesign name="fork" size={45} color={Colors.lochmara} />
                    <Text style={styles.text}>{info.detail}</Text>
                </View>
            case 'issues':
                return <View style={styles.detailCard}>
                    <Octicons name="issue-opened" size={45} color={Colors.red} />
                    <Text style={styles.text}>{info.detail}</Text>
                </View>
            case 'language':
                return <View style={styles.detailCard}>
                    <View style={[styles.languageColorContainer, {
                        backgroundColor: GithubColors[info.detail]
                    }]} />
                    <Text style={styles.text}>{info.detail}</Text>
                </View>
            case 'business_type':
                return <View style={styles.detailCard}>
                    <Ionicons name="ios-business" size={45} color={Colors.gray} />
                    <Text style={styles.text}>{info.detail}</Text>
                </View>
            default:
                return null
        }
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.regular,
        fontSize: 25,
        color: Colors.gray,
        marginTop: 20
    },
    languageColorContainer: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    detailCard: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        width: 130,
        height: 130,
        borderRadius: 20,
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    }
})