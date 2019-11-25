import * as React from 'react';
import {
    FlatList, View, Platform, Image, TouchableOpacity, TouchableHighlight, Keyboard, ScrollView, KeyboardAvoidingView, StyleSheet, Alert, ImageBackground, Dimensions, Animated, Text, Picker, StatusBar, TimePickerAndroid, DatePickerAndroid, DatePickerIOS
} from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { ScreenWidth } from '../../../ui-helpers/screen-dimensions';


export default class AppToasts extends React.Component<AppToastsProps, AppToastsState> {

    timer;

    state = {
        show: false,
        type: null,
        text: "Hey 👋",
        icon: ""
    };

    private animations = {
        common: new Animated.Value(0)
    }


    shouldComponentUpdate(newProps, newState: AppToastsState) {
        return !(
            (newState.text == this.state.text)
            && (newState.type == this.state.type)
        )
    }

    componentDidUpdate() {
        console.log("App Toast updated");
    }

    show(options: ToastOptions) {
        console.log("Show Toast");
        this.setState({
            show: true,
            type: options.type,
            text: options.text,
            icon: options.icon
        }, () => {
            Animated.timing(this.animations.common, {
                toValue: 1,
                duration: 1000,
            }).start();
            if (options.autoHide) {
                this.timer = setTimeout(() => {
                    this.hide();
                    this.timer = null;
                }, options.autoHide);
            }
        })
    }

    hide() {
        Animated.timing(this.animations.common, {
            toValue: 0,
            duration: 1000,
        }).start();
        setTimeout(() => {
            this.setState({
                show: false,
            })
        }, 1000);
    }


    render() {

        let toastText = this.state.text;

        const tostStyles = [
            styles.toast,
            styles.warningToast,
            (this.state.type == ToastTypes.ERROR) ?
                styles.errorToast :
                (
                    (this.state.type == ToastTypes.INFO) ?
                        styles.infoToast : (
                            (this.state.type == ToastTypes.SUCCESS) ?
                                styles.successToast : (
                                    (this.state.type == ToastTypes.WARNING) ?
                                        styles.warningToast : {}
                                )
                        )
                )
        ];

        const toastTextStyle = [
            styles.textStyle,
            (this.state.type == ToastTypes.ERROR) ?
                styles.errorToastText :
                (
                    (this.state.type == ToastTypes.INFO) ?
                        styles.infoToastText : (
                            (this.state.type == ToastTypes.SUCCESS) ?
                                styles.successToastText : (
                                    (this.state.type == ToastTypes.WARNING) ?
                                        styles.warningToastText : {}
                                )
                        )
                )
        ];

        const containerStyle = [
            styles.container,
            {
                transform: [
                    {
                        translateY: this.animations.common.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, -50],
                            extrapolate: 'clamp',
                        })
                    }
                ],
            }
        ];


        if (!this.state.show) {
            return <View />
        }
        return (
            <Animated.View style={containerStyle}>
                <View style={tostStyles as any}>
                    <Text style={toastTextStyle}>{toastText}</Text>
                </View>
            </Animated.View>
        );
    }
}

export interface AppToastsState {
    show: boolean,
    type: ToastTypes,
    text: string,
    icon: string
}

export interface AppToastsProps {
}

export enum ToastTypes {
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    INFO = "INFO",
    ERROR = "ERROR"
}


export interface ToastOptions {
    autoHide?: number;
    type: ToastTypes,
    text: string,
    icon?: string,
}

let styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        bottom: 0,
        left: 0,
        position: 'absolute',
        width: ScreenWidth
    },
    toast: {
        backgroundColor: '#55E3AA',
        padding: 15,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        maxWidth: 320
    },
    textStyle: {
        color: '#fff',
        fontFamily: 'Signika',
        fontSize: 16,
        textAlign: 'center'
    },
    warningToast: {
        backgroundColor: '#FFCC01',
        // Orrange
    },
    successToast: {
        backgroundColor: '#55E3AA',
        // Green
    },
    infoToast: {
        backgroundColor: '#FF5086',
        // Green
    },
    errorToast: {
        backgroundColor: '#D0021B',
        // red
    },
    warningToastText: {
        color: '#fff',
        // Orrange
    },
    successToastText: {
        color: '#fff',
        // Green
    },
    infoToastText: {
        color: '#fff',
        // Green
    },
    errorToastText: {
        color: '#fff',
        // red
    }
});