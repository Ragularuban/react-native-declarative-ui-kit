import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ButtonX } from "../../elements/button/button.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { Connect } from "../../collections/connect/connect.collection";
import { IconsPage, IconsPageConnectedProps } from "../../pages/icons-page/icons-page.page";


export class IconsPagePlayground extends React.PureComponent<IconsPagePlaygroundProps, IconsPagePlaygroundState>{

    state = {
        
    };

    actions = {
        goBack: () => {
            // Go Back
        }
    }

    UIActions = {

    }

    iconsPageConnector: () => IconsPageConnectedProps = () => {
        return {};
    }

    render() {
        return (
            <Column fill>
                <Connect connector={this.iconsPageConnector}>
                    <IconsPage 
                        {...this.actions}
                        goBack={this.actions.goBack}
                    />
                </Connect>
            </Column >
        )
    }
}

export interface IconsPagePlaygroundProps {

}

export interface IconsPagePlaygroundState {

}
