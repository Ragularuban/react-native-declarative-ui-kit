import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ButtonX } from "../../elements/button/button.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { Connect } from "../../collections/connect/connect.collection";
import { ProgressBarsPage, ProgressBarsPageConnectedProps } from "../../pages/progress-bars-page/progress-bars-page.page";


export class ProgressBarsPagePlayground extends React.PureComponent<ProgressBarsPagePlaygroundProps, ProgressBarsPagePlaygroundState>{

    state = {
        
    };

    actions = {
        goBack: () => {
            // Go Back
        }
    }

    UIActions = {

    }

    progressBarsPageConnector: () => ProgressBarsPageConnectedProps = () => {
        return {};
    }

    render() {
        return (
            <Column fill>
                <Connect connector={this.progressBarsPageConnector}>
                    <ProgressBarsPage 
                        {...this.actions}
                        goBack={this.actions.goBack}
                    />
                </Connect>
            </Column >
        )
    }
}

export interface ProgressBarsPagePlaygroundProps {

}

export interface ProgressBarsPagePlaygroundState {

}
