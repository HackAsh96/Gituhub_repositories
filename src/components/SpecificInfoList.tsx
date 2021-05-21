import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import Colors, { GithubColors } from '../constants/Colors'
import Fonts from '../constants/Fonts'
import { AntDesign, Ionicons, Octicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

interface ISpecificInfoList {
    info: {
        name: string,
        detail: any
    }
}

export default class SpecificInfoList extends React.Component<ISpecificInfoList>{
    render() {
        const { info } = this.props
        if (info.detail === null) return null
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
            case 'privacy':
                return <View style={styles.detailCard}>
                    <MaterialIcons
                        name={info.detail ? 'lock-outline' : 'public'}
                        size={45}
                        color={Colors.slateGray} />
                    <Text style={styles.text}>{info.detail ? 'Private' : 'Public'}</Text>
                </View>
            case 'website':
                return <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(info.detail)} style={[styles.detailCard, styles.shadowContainer]}>
                    <FontAwesome name="internet-explorer" size={45}
                        color={Colors.internet_explorer} />
                    <Text style={styles.text}>Website</Text>
                </TouchableOpacity>
            case 'github_repo':
                return <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(info.detail)} style={[styles.detailCard, styles.shadowContainer]}>
                    <AntDesign name="github" size={45}
                        color={Colors.darkGray} />
                    <Text style={styles.text}>Github</Text>
                </TouchableOpacity>
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
        marginVertical: 5,
        width: 130,
        height: 130,
        borderRadius: 20,
        backgroundColor: Colors.white
    },
    shadowContainer: {
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