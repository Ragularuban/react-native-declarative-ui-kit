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


export class ColorProfilePage extends React.PureComponent<ColorProfilePageProps & Partial<ColorProfilePageConnectedProps>, ColorProfilePageState>{

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
                        <H1 align-center bold dark-colored>Color Profile</H1>
                    </Row>

                    <Row flex_start padded-xl>
                        <P>Usage</P>
                    </Row>


                </Scrollable>
            </Column>
        )
    }

}

export interface ColorProfilePageProps {
    goBack: () => any
}

export interface ColorProfilePageState {

}

export interface ColorProfilePageConnectedProps {

}
