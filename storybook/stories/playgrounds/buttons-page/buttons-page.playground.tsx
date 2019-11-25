import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ButtonX } from "../../elements/button/button.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { Connect } from "../../collections/connect/connect.collection";
import { ButtonsPage, ButtonsPageConnectedProps } from "../../pages/buttons-page/buttons-page.page";


export class ButtonsPagePlayground extends React.PureComponent<ButtonsPagePlaygroundProps, ButtonsPagePlaygroundState>{

    state = {
        
    };

    actions = {
        goBack: () => {
            // Go Back
        }
    }

    UIActions = {

    }

    buttonsPageConnector: () => ButtonsPageConnectedProps = () => {
        return {};
    }

    render() {
        return (
            <Column fill>
                <Connect connector={this.buttonsPageConnector}>
                    <ButtonsPage 
                        {...this.actions}
                        goBack={this.actions.goBack}
                    />
                </Connect>
            </Column >
        )
    }
}

export interface ButtonsPagePlaygroundProps {

}

export interface ButtonsPagePlaygroundState {

}
