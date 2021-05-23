import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    LayoutAnimation
} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { LinearGradient } from 'expo-linear-gradient';

interface IToastComponentState {
    message: string
    type: string
    status: boolean
    navigate: any
}

export default class ToastComponent extends React.Component<{}, IToastComponentState> {
    state = {
        message: '',
        type: '',
        status: false,
        navigate: () => null
    };
    componentDidMount() {
        (window as any).showToast = (params: any) => {
            const { status, message, type, navigate } = params;
            this.setState({ message, status, type, navigate });
            let wordCount = this.countWords(message);
            setTimeout(() => {
                LayoutAnimation.easeInEaseOut()
                this.setState({ status: false, message: '', type: '' })
            }, wordCount * 100)
        };
    }
    countWords(str: string) {
        return str.length;
    }
    getToastType = (type: string): any => {
        const toastPackage = [{
            title: 'Info',
            backgroundColor: Colors.infoBlue,
            gradient: Colors.gradientInfoBlue,
            icon: <AntDesign name="infocirlce" size={24} color={Colors.white} />
        }, {
            title: 'Success',
            backgroundColor: Colors.yellow,
            gradient: Colors.gradientYellow,
            icon: <AntDesign name="star" size={24} color={Colors.white} />
        }]
        return toastPackage.find((item: any) => {
            return item.title.toLowerCase() === type.toLowerCase()
        })
    }
    mainRender() {
        const { message, type, navigate } = this.state;
        if (message === '') return <></>
        const toast = this.getToastType(type)
        const gradient = toast.gradient
        LayoutAnimation.easeInEaseOut()
        return (
            <View
                onTouchEnd={() => this.setState({ status: false, message: '', type: '' })}
                style={styles.container}>
                <LinearGradient
                    colors={gradient}
                    style={styles.gradient}>
                    <View onTouchEnd={() => navigate && navigate()} style={[{ backgroundColor: toast.backgroundColor }, styles.toastContainer]}>
                        <View style={{ padding: 10 }}>{toast.icon}</View>
                        <Text
                            style={[
                                { fontSize: 20, padding: 10 },
                                styles.text
                            ]}>
                            {message}
                        </Text>
                    </View>
                </LinearGradient>
            </View>
        );
    }
    render() {
        if (this.state.status)
            return this.mainRender()
        else return <></>
    }
}
const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        right: 0,
        left: 0,
        flex: 1,
        bottom: 0,
        zIndex: 99,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        flex: 1,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.4)',
        zIndex: 9999,
        elevation: 9999,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    toastContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 30,
        padding: 10,
        borderRadius: 20,
        zIndex: 999,
        elevation: 999,
        flexDirection: 'row'
    },
    text: {
        fontFamily: Fonts.bold,
        textAlign: 'left',
        color: Colors.white
    },
});
