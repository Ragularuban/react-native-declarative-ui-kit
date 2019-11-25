import * as React from 'react';
import {
    FlatList, View, Platform, Image, TouchableOpacity, TouchableHighlight, Keyboard, ScrollView, KeyboardAvoidingView, StyleSheet, Alert, ImageBackground, Dimensions, Animated, Text, Picker, StatusBar
} from 'react-native';

export default class KeyboardEvents extends React.PureComponent<KeyboardEventsProps, KeyboardEventsState> {
    keyboardDidShowListener;
    keyboardDidHideListener;

    componentDidMount() {
        if (Platform.OS !== 'ios') {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
        } else {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardDidShow.bind(this));
            this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardDidHide.bind(this));
        }
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow(e) {
        this.props.onKeyboardShow(e);
    }

    _keyboardDidHide(e) {
        this.props.onKeyboardHide(e);
    }

    render() {
        return (<View />);
    }


}

export interface KeyboardEventsState {

}

export interface KeyboardEventsProps {
    onKeyboardShow: (e?) => any,
    onKeyboardHide: (e?) => any
}