import { SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'
import { getRepositories } from '../redux/actions'
import store from '../redux/store'
interface INoElementComponentProps {
    text: string
    isRefresh: boolean
}

export default class NoElementComponent extends React.Component<INoElementComponentProps>{
    renderElement = () => {
        const { text, isRefresh } = this.props
        if (isRefresh) {
            return (
                <View>
                    <Text
                        style={styles.text}>
                        {text}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => store.dispatch(getRepositories())}
                        style={[styles.buttonContainer, styles.shadow]}>
                        <SimpleLineIcons name="refresh" size={24} color={Colors.lochmara} />
                        <Text style={styles.text}>Refresh</Text>
                    </TouchableOpacity></View>)
        }
        return <Text
            style={styles.text}>
            {text}
        </Text>

    }
    render() {
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
            {this.renderElement()}
        </View>
    }
}
const styles = StyleSheet.create({
    text: {
        color: Colors.lochmara,
        padding: 10,
        textAlign: 'center',
        fontFamily: Fonts.regular,
        fontSize: 25,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    buttonContainer: {
        alignSelf: 'center',
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: Colors.white
    }
})