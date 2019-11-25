import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";

import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { Icon } from "../../elements/icon/icon.element";


export class IconsPage extends React.PureComponent<IconsPageProps & Partial<IconsPageConnectedProps>, IconsPageState>{

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
            title: "Icons Page"
        };
        return (
            <Column fill>
                <Scrollable stickyHeaderIndices={[0]}>
                    <Widget no-margin padded-xxl>
                        <H1>Icons Examples</H1>
                    </Widget>

                    {/* Sizes */}
                    <Widget padded-xxl>
                        <Box>
                            <Icon name="ios-cloud" size={10}></Icon>
                            <Icon name="ios-cloud" small-xx></Icon>
                            <Icon name="ios-cloud" small-x></Icon>
                            <Icon name="ios-cloud" small></Icon>
                            <Icon name="ios-cloud" large></Icon>
                            <Icon name="ios-cloud" large-x></Icon>
                            <Icon name="ios-cloud" large-xx></Icon>
                            <Icon name="ios-cloud" large-3x></Icon>
                            <Icon name="ios-cloud" large-4x></Icon>
                            <Icon name="ios-cloud" large-5x></Icon>
                            <Icon name="ios-cloud" large-6x></Icon>
                        </Box>
                    </Widget>

                    {/* Colors */}
                    <Widget padded-xxl>
                        <Box>
                            <Icon name="ios-cloud" primary></Icon>
                            <Icon name="ios-cloud" secondary></Icon>
                            <Icon name="ios-cloud" grey></Icon>
                            <Icon name="ios-cloud" color="#ff00ff"></Icon>
                        </Box>
                    </Widget>
                </Scrollable>
            </Column>
        )
    }

}

export interface IconsPageProps {
    goBack: () => any
}

export interface IconsPageState {

}

export interface IconsPageConnectedProps {

}
