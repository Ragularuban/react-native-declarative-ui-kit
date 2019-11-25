import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import Modal from "react-native-modal";
import { Dimensions, Animated, StatusBar, StyleSheet } from "react-native";
import { Icon } from "../../elements/icon/icon.element";
import { ifSmallerScreen } from "../../../ui-helpers/is-smaller-screen";
import { ScreenHeight } from "../../../ui-helpers/screen-dimensions";
const autoBind = require('auto-bind');


export class BottomModalPanel extends React.PureComponent<BottomModalPanelProps, BottomModalPanelState>{

    static defaultProps = {
        height: 650,
    }

    isExpanded: boolean;

    state = {
        height: Math.min(ScreenHeight - 50, this.props.height),
    };


    constructor(props) {
        super(props);
        autoBind(this);
    }


    private animations = {
        modalHeight: new Animated.Value(Math.min(ScreenHeight - 50, this.props.height)),
        margin: new Animated.Value(7)
    };

    private setModalHeight(height: number) {
        Animated.timing(this.animations.modalHeight, {
            toValue: Math.min(ScreenHeight - 50, height),
            duration: 200,
        }).start();
        setTimeout(() => {
            this.setState({
                height: height
            });
        }, 1000);
    }

    private resetModal() {
        this.isExpanded = false;
        this.animations.modalHeight.setValue(Math.min(ScreenHeight - 50, this.props.height))
        this.animations.margin.setValue(7);
    }

    private onBackButtonPressed() {
        this.hideModal();
    }

    private hideModal() {
        this.resetModal();
        this.props.onHideModal();
    }

    private onSwipe(up?: boolean) {
        if (up && !this.props["stop-expansion"]) {
            let distanceFromTop = ifSmallerScreen(20, 40)
            Animated.timing(this.animations.modalHeight, {
                toValue: Math.min(ScreenHeight - distanceFromTop),
                duration: 200,
            }).start();
            Animated.timing(this.animations.margin, {
                toValue: 0,
                duration: 200,
            }).start();
            return;
        }
        this.hideModal();
    }


    private renderBody(panHandlers) {

        const containerStyles = [
            styles.scrollableModal,
            { minHeight: this.animations.modalHeight }
        ];

        const wrapperStyles = [
            styles.modalWrapper,
            { marginLeft: this.animations.margin, marginRight: this.animations.margin, }
        ];

        return (
            <Animated.View style={wrapperStyles} collapsable={false}>
                <Animated.View style={containerStyles}>
                    {/*  Top Arrow */}
                    {
                        !this.props.hideNotch &&
                        (
                            <Row {...panHandlers} padded>
                                <Touchable onPress={this.hideModal}>
                                    <Icon name={this.isExpanded ? "ios-arrow-down" : "md-remove"} grey />
                                </Touchable>
                            </Row>
                        )
                    }
                    {
                        React.cloneElement(this.props.children as any, {
                            onModalViewScroll: this.handleOnScroll,
                            panHandlers
                        })
                    }
                </Animated.View>
            </Animated.View>
        );
    }

    render() {
        return (
            <Modal
                isVisible={this.props.isVisible}
                onSwipe={this.onSwipe}
                swipeDirection="down"
                style={styles.modalStyle}
                // swipeThreshold={400}
                hideModalContentWhileAnimating={true}
                onBackButtonPress={this.onBackButtonPressed}
                renderBody={this.renderBody}
                avoidKeyboard={this.props.avoidKeyboard}
                onBackdropPress={this.hideModal}
            >
                <StatusBar
                    translucent={false}
                    backgroundColor="rgba(0,0,0,0.7)"
                    barStyle={'light-content'}
                />
            </Modal>
        );
    }

    private handleOnScroll = event => {
        if (!this.isExpanded) {
            this.onSwipe(true);
        }
        this.isExpanded = true;
    };
}

export interface BottomModalPanelProps {
    isVisible: boolean;
    onHideModal: () => any;
    children?: JSX.Element | JSX.Element[],
    height?: number,
    avoidKeyboard?: boolean,
    "stop-expansion"?: boolean,
    hideNotch?: boolean
}

export interface BottomModalPanelState {
    height: number;
}


const styles = StyleSheet.create({
    modalStyle: {
        justifyContent: "flex-end",
        margin: 0
    },
    modalWrapper: {
        backgroundColor: '#fff',
        paddingBottom: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        bottom: -200,
        overflow: 'hidden'
    },
    scrollableModal: {
        minHeight: 200
    },
});
