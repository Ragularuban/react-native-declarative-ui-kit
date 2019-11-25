import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ButtonX } from "../../elements/button/button.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { Connect } from "../../collections/connect/connect.collection";
import { InputsPage, InputsPageConnectedProps } from "../../pages/inputs-page/inputs-page.page";


export class InputsPagePlayground extends React.PureComponent<InputsPagePlaygroundProps, InputsPagePlaygroundState>{

    state = {
        
    };

    actions = {
        goBack: () => {
            // Go Back
        }
    }

    UIActions = {

    }

    inputsPageConnector: () => InputsPageConnectedProps = () => {
        return {};
    }

    render() {
        return (
            <Column fill>
                <Connect connector={this.inputsPageConnector}>
                    <InputsPage 
                        {...this.actions}
                        goBack={this.actions.goBack}
                    />
                </Connect>
            </Column >
        )
    }
}

export interface InputsPagePlaygroundProps {

}

export interface InputsPagePlaygroundState {

}
