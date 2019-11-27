import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { dark, rainbow, atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { ImageX } from "../../elements/image/image.element";
import { Assets, UIConfigurations } from "../../config/config";


export class WelcomePage extends React.PureComponent<WelcomePageProps & Partial<WelcomePageConnectedProps>, WelcomePageState>{

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
            title: "Typography Page"
        };
        return (
            <Column fill>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */}
                    <Row padded-l backgroundColor={UIConfigurations.global.colors.success}>
                        <H1 align-center bold dark-colored>Welcome To Alakazam System UI</H1>
                    </Row>
                    <Box padded-l>
                        <H4 align-center dark-colored>Please Select an Element from the navigator</H4>
                    </Box>


                </Scrollable>
            </Column>
        )
    }

}

export interface WelcomePageProps {
    goBack: () => any
}

export interface WelcomePageState {

}

export interface WelcomePageConnectedProps {

}
