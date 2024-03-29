import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import Notification from 'react-native-in-app-notification';
import { TouchableOpacity, StatusBar, View, Text, Image, Vibration, StyleSheet } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { Assets } from "../../config/config";


export class InAppNotification extends React.Component<InAppNotificationProps & Partial<InAppNotificationConnectedProps>, InAppNotificationState>{
    notificationRef;
    previousData;

    onLayoutRefs = {
        notification: (ref) => this.notificationRef = ref
    }

    shouldComponentUpdate(prevProps) {
        this.previousData = this.props.notification;
        return (this.props.notification != prevProps.notification);
    }

    componentDidUpdate(prevProps: InAppNotificationProps) {
        if (this.props.notification && (this.previousData != this.props.notification)) {
            this.showNotification();
        }
    }

    showNotification() {
        if (this.notificationRef) {
            this.notificationRef.show(this.props.notification);
            console.log('this.props.notification', this.props.notification);
        }
    }

    onPress = () => {
        
    }

    render() {
        return (
            <Notification ref={this.onLayoutRefs.notification} closeInterval={4000} iconApp={Assets.app.icon_app} notificationBodyComponent={DefaultNotificationBody} />
        )
    }
}

export interface InAppNotificationProps {
}

export interface InAppNotificationConnectedProps {
    notification: iNotification
}

export interface InAppNotificationState {

}



export interface iNotification {
    title: string,
    message: string,
    icon: any,
    onPress: () => any,
}


export default class DefaultNotificationBody extends React.Component<AppNotificationProps, any> {

    constructor(props) {
        super(props);
        this.onNotificationPress = this.onNotificationPress.bind(this);
        this.onSwipe = this.onSwipe.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isOpen !== prevProps.isOpen) {
            // StatusBar.setHidden(this.props.isOpen);
        }

        // if ((prevProps.vibrate || this.props.vibrate) && this.props.isOpen && !prevProps.isOpen) {
        //     Vibration.vibrate([500, 2000, 500], false);
        // }
    }

    onNotificationPress() {
        const {
            onPress,
            onClose,
        } = this.props;

        onClose();
        onPress();
    }

    onSwipe(direction) {
        const { SWIPE_UP } = swipeDirections;

        if (direction === SWIPE_UP) {
            this.props.onClose();
        }
    }

    renderIcon() {
        const {
            iconApp,
            icon,
        } = this.props;

        if (icon) {
            return <Image source={icon} style={styles.icon} />;
        } else if (iconApp) {
            return <Image source={iconApp} style={styles.iconApp} />;
        }

        return null;
    }

    render() {
        const {
            title,
            message,
        } = this.props;

        return (
            <View style={styles.root}>
                <GestureRecognizer onSwipe={this.onSwipe} style={styles.container}>
                    <TouchableOpacity
                        style={styles.content}
                        activeOpacity={0.3}
                        {...({ underlayColor: "transparent" } as any)}
                        onPress={this.onNotificationPress}
                    >
                        {this.renderIcon()}
                        <View style={styles.textContainer}>
                            <Text numberOfLines={1} style={styles.title}>{title}</Text>
                            <Text numberOfLines={1} style={styles.message}>{message}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.footer} />
                </GestureRecognizer>
            </View >
        );
    }
}

(DefaultNotificationBody as any).defaultProps = {
    title: 'Notification',
    message: 'This is a test notification',
    vibrate: true,
    isOpen: false,
    iconApp: null,
    icon: null,
    onPress: () => null,
    onClose: () => null,
}


export interface AppNotificationProps {
    title: string,
    message: string,
    vibrate: boolean,
    isOpen: boolean,
    onPress: () => any,
    onClose: () => any,
    iconApp: any,
    icon: any,
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#050505',
    },
    container: {
        position: 'absolute',
        top: isIphoneX() ? getStatusBarHeight() : 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    iconApp: {
        marginTop: 10,
        marginLeft: 20,
        resizeMode: 'contain',
        width: 24,
        height: 24,
        borderRadius: 5,
    },
    icon: {
        marginTop: 10,
        marginLeft: 10,
        resizeMode: 'contain',
        width: 48,
        height: 48,
    },
    textContainer: {
        alignSelf: 'center',
        marginLeft: 20,
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    message: {
        color: '#FFF',
        marginTop: 5,
    },
    footer: {
        backgroundColor: '#696969',
        borderRadius: 5,
        alignSelf: 'center',
        height: 5,
        width: 35,
        margin: 5,
    },
});