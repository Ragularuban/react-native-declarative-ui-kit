import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ButtonX } from "../../elements/button/button.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { Connect } from "../../collections/connect/connect.collection";
import { TypographyPage, TypographyPageConnectedProps } from "../../pages/typography-page/typography-page.page";
import { WelcomePage } from "../../pages/welcome-page/welcome-page.page";


export class WelcomePagePlayground extends React.PureComponent<WelcomePagePlaygroundProps, WelcomePagePlaygroundState>{

    state = {
        
    };

    actions = {
        goBack: () => {
            // Go Back
        }
    }

    UIActions = {

    }

    typographyPageConnector: () => TypographyPageConnectedProps = () => {
        return {};
    }

    render() {
        return (
            <Column fill>
                <Connect connector={this.typographyPageConnector}>
                    <WelcomePage 
                        {...this.actions}
                        goBack={this.actions.goBack}
                    />
                </Connect>
            </Column >
        )
    }
}

export interface WelcomePagePlaygroundProps {

}

export interface WelcomePagePlaygroundState {

}
