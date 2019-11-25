import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Dimensions, Animated, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "../../../ui-helpers/screen-dimensions";


export class TopPanel extends React.PureComponent<TopPanelProps, TopPanelState>{
    private isVisible: boolean;

    private animations = {
        modalTranslationY: new Animated.Value(0)
    }

    componentDidMount() {
        if (!this.isVisible && this.props.isVisible) {
            this.show();
        }
    }

    componentDidUpdate() {
        if (!this.isVisible && this.props.isVisible) {
            this.show();
        } else if (this.isVisible && !this.props.isVisible) {
            this.dismiss();
        }
    }

    show = () => {
        Animated.timing(this.animations.modalTranslationY, {
            toValue: 1,
            duration: 400,
        }).start();
        this.isVisible = true;
    }

    dismiss = () => {
        Animated.timing(this.animations.modalTranslationY, {
            toValue: 0,
            duration: 400,
        }).start();
        this.isVisible = false;
    }

    render() {
        // Generate Container Styles
        const containerStyles = [
            styles.container,
            {
                transform: [
                    {
                        translateY: this.animations.modalTranslationY.interpolate({
                            inputRange: [0, 0.1, 1],
                            outputRange: [-ScreenHeight, 0, 0],
                            extrapolate: 'clamp',
                        })
                    }
                ],
            }

        ];
        // Generate Backdrop Styles
        const backdropStyles = [
            styles.backdrop,
            {
                opacity: this.animations.modalTranslationY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.4],
                    extrapolate: 'clamp',
                })
            }

        ];
        // Generate Profile Widget Styles
        const contentContainerStyles = [
            styles.contentContainer,
            // { height: 400 },
            {
                transform: [
                    {
                        translateY: this.animations.modalTranslationY.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-400, 0],
                            extrapolate: 'clamp',
                        })
                    }
                ],
            }
        ];
        return (
            <Animated.View style={containerStyles}>
                {/* Back Drop */}
                <Animated.View style={backdropStyles}>
                    <TouchableWithoutFeedback onPress={this.props.onBackdropPressed} >
                        <View style={styles.backdropInner} ></View>
                    </TouchableWithoutFeedback>
                </Animated.View>
                {/* Widget Inner */}
                <Animated.View style={contentContainerStyles}>
                    {this.props.children}
                </Animated.View>
            </Animated.View>
        )
    }
}

export interface TopPanelProps {
    isVisible: boolean,
    onBackdropPressed: () => any
}

export interface TopPanelState {

}



const styles = StyleSheet.create({
    container: {
        zIndex: 999,
        top: 0,
        left: 0,
        position: 'absolute',
        height: ScreenHeight,
        width: ScreenWidth,
    },
    backdrop: {
        backgroundColor: "#000",
        position: 'absolute',
        height: ScreenHeight,
        top: 0,
        width: ScreenWidth,
        zIndex: 999,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    backdropInner: {
        flex: 1,
        height: ScreenHeight,
        top: 0,
        width: ScreenWidth
    },
    contentContainer: {
        backgroundColor: "#fff",
        position: 'absolute',
        top: 0,
        width: ScreenWidth,
        zIndex: 999,
        minHeight:100,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
});
