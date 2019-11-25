import * as React from "react";
import { Component, } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { View, StyleSheet, StatusBar } from 'react-native';
import { H1, H2, H3, H4, P } from "../../typography/typography";
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import { Assets } from "../../config/config";

export class GlobalProcessingIndicator extends React.PureComponent<GlobalProcessingIndicatorProps & Partial<GlobalProcessingIndicatorConnectedProps>, GlobalProcessingIndicatorState>{

    render() {
        return (
            <ModalContent
                isVisible={this.props.isVisible}
            >
                <StatusBar
                    translucent={false}
                    backgroundColor="rgba(0,0,0,0.7)"
                    barStyle={'light-content'}
                />
                <ModalWrapper>
                    <View style={[styles.scrollableModal]}>
                        <ArrowButtonWrapper>
                            <ArrowButton source={Assets.loaders.loader3Dots} />
                        </ArrowButtonWrapper>
                    </View>
                </ModalWrapper>
            </ModalContent >
        );
    }
}

export interface GlobalProcessingIndicatorProps {
   
}

export interface GlobalProcessingIndicatorConnectedProps {
    isVisible: boolean
}

export interface GlobalProcessingIndicatorState {

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollableModal: {
        height: 100
    },
});

const ModalWrapper = styled.View`
            background-color: #ffffff;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            padding-bottom: 0px;
            margin: 0 7px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            bottom: 0;
          `;

const ArrowButtonWrapper = styled.View`
          margin-top: 7px;
          margin-bottom: 7px;
          justify-content: center;
          align-items: center;
        `;


const ArrowButton = styled.Image`
          height: 60px;
          width: 90px;
        `;

const ModalContent = styled(Modal)`
          margin-bottom: 0px;
          margin-left: 0px;
          margin-right: 0px;
          border-radius: 90px;
          justifyContent: flex-end;
          margin: 0;
        `;
