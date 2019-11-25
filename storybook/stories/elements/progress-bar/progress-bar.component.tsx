import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
    ViewStyle,
    RegisteredStyle,
} from 'react-native';
import { P, H3 } from '../../typography/typography';
import { Box } from '../../layout/layout';
const styles = StyleSheet.create({
    background: {
        flex:1,
        flexDirection:'row',
        backgroundColor: '#bbbbbb',
        height: 20,
        overflow: 'hidden',
        borderRadius:8
    },
    fill: {
        backgroundColor: '#38DD80',
        height: 20
    }
});

export default class ProgressBar extends React.PureComponent<ProgressBarProps, any> {


    static defaultProps = {
        style: styles,
        easing: Easing.inOut(Easing.ease),
        easingDuration: 500
    };

    constructor(props) {
        super(props);
    }

    state = {
        progress: new Animated.Value(this.props.initialProgress || 0)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
            this.update();
        }
    }

    componentDidMount() {
        this.update();
    }

    render() {

        const fillWidth = this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0 * this.props.width, 1 * this.props.width],
        });

        let a = this.props.isValueDisplay ? styles.background.height=50 : styles.background.height=5


        return (
            <View style={[styles.background, this.props.backgroundStyle, this.props.style]}>
            <Box fill>
            <Animated.View style={[styles.fill, this.props.fillStyle, { width: fillWidth }]} >
                    
            </Animated.View>
            </Box>
           {
               
               this.props.isValueDisplay && 
               <Box fill flex_end>
                    <P>{String(this.props.progress*100)}%  </P>
                </Box>
                
           }
                
            </View>
        );
    }

    update() {
        Animated.timing(this.state.progress, {
            easing: this.props.easing,
            duration: this.props.easingDuration,
            toValue: this.props.progress
        }).start();
    }
};

export interface ProgressBarProps {
    progress: number;
    width: number;
    easingDuration?: number;
    initialProgress?: number;
    style?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
    backgroundStyle?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
    fillStyle?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
    easing?: (value: number) => number;
    isValueDisplay: boolean
}