import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";


export class ButtonsPage extends React.PureComponent<ButtonsPageProps & Partial<ButtonsPageConnectedProps>, ButtonsPageState>{

    static defaultProps = {

    }

    state = {

    }

    UIActions = {

    }

    action = {

    }

    render() {

        const pageHeaderProps = {
            onBackPressed: this.props.goBack,
            previousScreen: "Back",
            title: "Buttons Page"
        };
        return (
            <Column fill>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */}
                    <Widget no-margin padded-xxl>
                        <H1>Buttons Examples</H1>
                    </Widget>

                    {/* Simple Button */}
                    <Widget padded-xxl>
                        <ButtonX label="Button"></ButtonX>
                    </Widget>

                    {/* Button Colors */}
                    <Widget padded-xxl>
                        <ButtonX label="Primary" primary add-margin></ButtonX>
                        <ButtonX label="Primary" secondary add-margin></ButtonX>
                        <ButtonX label="Primary" dark add-margin></ButtonX>
                        <ButtonX label="Primary" inverted primary add-margin></ButtonX>
                        <ButtonX label="Primary" inverted secondary add-margin></ButtonX>
                        <ButtonX label="Primary" inverted dark add-margin></ButtonX>
                    </Widget>

                    {/* Button Types */}
                    <Widget padded-xxl>
                        <ButtonX label="Labeled" labeled icon="ios-close"></ButtonX>
                        <ButtonX label="Labeled" labeled icon="ios-close" left-aligned-icon></ButtonX>
                    </Widget>

                    {/* Button Sizes */}
                    <Widget padded-xxl>
                        <ButtonX label="Small" small></ButtonX>
                        <ButtonX label="Normal"></ButtonX>
                        <ButtonX label="Large" large></ButtonX>
                        <ButtonX label="Extra Large" large-x></ButtonX>
                    </Widget>

                </Scrollable>
                {/* Bottom Bar */}
            </Column>
        )
    }

}

export interface ButtonsPageProps {
    goBack: () => any
}

export interface ButtonsPageState {

}

export interface ButtonsPageConnectedProps {

}
