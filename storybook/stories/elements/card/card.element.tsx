import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, Platform } from 'react-native';
import { BoxShadow, Shadow } from 'react-native-shadow';
import styled from 'styled-components/native';
import { getLayout } from "../../layout/layout.helpers";
import { UIConfigurations } from "../../config/config";


export class BasicCard extends React.PureComponent<CardProps, CardState> {

    state = {
        width: 300,
        height: 100
    }

    onLayoutChanged = (event) => {
        if (Platform.OS !== "ios" && !(this.props.width && (this.props.height || this.props.square))) {
            let { x, y, width, height } = event.nativeEvent.layout;
            this.setState({
                height,
                width
            })
        }
    }

    render() {
        const style = [this.props.alwaysUseNative ? styles.nativeCard : styles.card, (this.props.style[0] ? this.props.style[0] : {}), {
            ...((Platform.OS !== "ios") ? {
                // borderColor: '#cccccc',
                // borderWidth: 1
            } : {})
        }];
        const marginTop = this.props.style[0].hasOwnProperty("marginTop") ? this.props.style[0].marginTop : 20;

        const marginLeft = this.props.style[0].hasOwnProperty("marginLeft") ? this.props.style[0].marginLeft : 20;
        const shadowOpt = {
            width: this.props.width || this.state.width,
            height: this.props.height || (this.props.square && this.props.width) || this.state.height,
            color: "#ccc",
            border: 20,
            radius: 10,
            opacity: 0.2,
            x: 0,
            y: 0,
            style: { top: marginTop, left: marginLeft, position: 'absolute' }
        };

        return (
            <View>
                {/* Todo: Probably, instead of using state to update shadows, we could direct manipulate the component*/}
                {Platform.OS !== "ios" && !this.props.alwaysUseNative && <BoxShadow setting={shadowOpt}></BoxShadow>}
                <View style={style} onLayout={this.onLayoutChanged}>
                    {this.props.children}
                </View>
            </View >

        )

    }
}

export interface CardProps {
    style?: any;
    height?: number;
    width?: number;
    square?: boolean;
    alwaysUseNative?: boolean
}

export interface CardState {

}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        shadowColor: '#d0d0d0',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
    },
    nativeCard: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        shadowColor: '#d0d0d0',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 2,
    }
});


// Row View
export const Widget = styled(BasicCard)`
  ${props => props.height ? `height:${props.height};` : ''}
  ${props => props.width ? `width:${props.width};` : ''}
  ${props => (props.square && props.width) ? `height:${props.width};` : ''}
  ${props => props.row ? `flex-direction:row;` : 'flex-direction:column;'}
  ${props => getLayout(props, props.row)}
`;
