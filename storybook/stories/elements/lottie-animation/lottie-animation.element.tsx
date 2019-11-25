import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, ImageURISource, ImageRequireSource, ViewStyle, RegisteredStyle, ImageStyle, TextStyle } from 'react-native';
import { Assets } from "../../config/config";
import * as Expo from 'expo';
import { Box } from "../../layout/layout";
// let { Lottie } = (Expo as any).DangerZone;
// import Lottie from 'lottie-react-native'
// import { DangerZone } from 'expo';
// const { Lottie } = DangerZone;
const Lottie = require('lottie-react-native');
export class LottieAnimation extends React.PureComponent<LottieAnimationProps, any> {
    animationRef;


    onAnimationRef = (ref) => {
        this.animationRef = ref;
        this.playAnimation();
    };

    playAnimation = () => {
        if (this.animationRef) {
            this.animationRef.reset();
            this.animationRef.play();
        }
    };

    render() {

        return (
            <Box width={this.props.width} height={this.props.height}>
                <Lottie
                    ref={this.onAnimationRef}
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                    source={this.props.source}
                />
            </Box>
        )
    }
}

export interface LottieAnimationProps {
    style?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle | ImageStyle | TextStyle> | RegisteredStyle<ViewStyle | ImageStyle | TextStyle>[],
    source: any;
    width: number;
    height: number;
}