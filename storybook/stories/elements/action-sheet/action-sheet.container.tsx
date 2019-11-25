import * as React from 'react';
import {
    FlatList, View, Platform, Image, TouchableOpacity, TouchableHighlight, Keyboard, ScrollView, KeyboardAvoidingView, StyleSheet, Alert, ImageBackground, Dimensions, Animated, Text, Picker, StatusBar, TimePickerAndroid, DatePickerAndroid, DatePickerIOS
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { ScreenWidth } from '../../../ui-helpers/screen-dimensions';


export default class ActionSheetWrapper extends React.PureComponent<ActionSheetWrapperProps, any> {
    ActionSheetWrapper;
    onPressAction = () => { }

    state = {
        options: [],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 0,
        onPress: () => { }
    };

    componentDidMount() {
    }


    componentDidUpdate() {
        console.log("ActionSheetWrapper updated");
    }

    show(options) {
        this.setState(options, () => {
            this.ActionSheetWrapper.show();
        });
    }


    render() {

        let ActionSheetWrapperProps = {
            ref: o => this.ActionSheetWrapper = o,
            // title: (< Text style={{ color: '#000', fontSize: 18 }}> Which one do you like ?</Text >),
            options: this.state.options,
            cancelButtonIndex: this.state.cancelButtonIndex,
            destructiveButtonIndex: this.state.cancelButtonIndex,
            onPress: this.state.onPress
        }

        return (
            <ActionSheet {...ActionSheetWrapperProps} />
        );
    }
}

export interface ActionSheetWrapperProps {

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
});