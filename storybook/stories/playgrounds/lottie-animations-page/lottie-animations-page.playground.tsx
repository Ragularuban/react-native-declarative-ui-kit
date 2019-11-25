import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ButtonX } from "../../elements/button/button.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { Connect } from "../../collections/connect/connect.collection";
import { LottieAnimationsPage, LottieAnimationsPageConnectedProps } from "../../pages/lottie-animations-page/lottie-animations-page.page";


export class LottieAnimationsPagePlayground extends React.PureComponent<LottieAnimationsPagePlaygroundProps, LottieAnimationsPagePlaygroundState>{

    state = {
        
    };

    actions = {
        goBack: () => {
            // Go Back
        }
    }

    UIActions = {

    }

    lottieAnimationsPageConnector: () => LottieAnimationsPageConnectedProps = () => {
        return {};
    }

    render() {
        return (
            <Column fill>
                <Connect connector={this.lottieAnimationsPageConnector}>
                    <LottieAnimationsPage 
                        {...this.actions}
                        goBack={this.actions.goBack}
                    />
                </Connect>
            </Column >
        )
    }
}

export interface LottieAnimationsPagePlaygroundProps {

}

export interface LottieAnimationsPagePlaygroundState {

}
