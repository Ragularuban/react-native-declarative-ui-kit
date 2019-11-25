import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ButtonX } from "../../elements/button/button.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { Connect } from "../../collections/connect/connect.collection";
import { OnBoardingPage, OnBoardingPageConnectedProps, OnBoardingPageProps } from "../../pages/on-boarding-page/on-boarding-page.page";


export class OnBoardingPagePlayground extends React.PureComponent<OnBoardingPagePlaygroundProps, OnBoardingPagePlaygroundState>{

    state = {

    };

    actions = {
        onSignIn: () => {

        },
        onGetStarted: () => {

        },
        onSwipe: (index: number) => {

        }
    }

    UIActions = {

    }

    onBoardingPageConnector: () => OnBoardingPageConnectedProps = () => {
        return {};
    }

    render() {

        const onBoardingPageProps: OnBoardingPageProps = {
            onSignIn: this.actions.onSignIn,
            onGetStarted: this.actions.onGetStarted,
            onSwipe: this.actions.onSwipe
        }

        return (
            <Column fill>
                <Connect connector={this.onBoardingPageConnector}>
                    <OnBoardingPage
                        {...onBoardingPageProps}
                    />
                </Connect>
            </Column >
        )
    }
}

export interface OnBoardingPagePlaygroundProps {

}

export interface OnBoardingPagePlaygroundState {

}
