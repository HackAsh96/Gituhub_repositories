import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors, { GithubColors } from '../constants/Colors'
import Fonts from '../constants/Fonts'
import { convertDateFormat, trimHighNumbers } from '../config'
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons';

interface INoElementComponentProps {
    text: string
}

export default class NoElementComponent extends React.Component<INoElementComponentProps>{
    render() {
        const { text } = this.props
        return <View
            style={{
                flex: 1,
                backgroundColor: Colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                justifyContent: 'center',
            }}>
            <Image
                resizeMode='contain'
                style={{ height: 200, width: 'auto' }}
                source={require('../../assets/images/empty.png')}
            />
            <Text
                style={{
                    color: Colors.lochmara,
                    padding: 20,
                    textAlign: 'center',
                    fontFamily: Fonts.regular,
                    fontSize: 25,
                }}>
                {text}
            </Text>
        </View>
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