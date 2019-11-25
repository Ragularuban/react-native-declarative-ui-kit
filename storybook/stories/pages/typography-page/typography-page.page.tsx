import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { dark, rainbow, atomOneDark } from 'react-syntax-highlighter/styles/hljs';


export class TypographyPage extends React.PureComponent<TypographyPageProps & Partial<TypographyPageConnectedProps>, TypographyPageState>{

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
                    <Widget no-margin padded-xxl>
                        <H1>Typography Examples</H1>
                    </Widget>

                    {/* Font Sizes */}
                    <Widget padded-xxl>
                        <H1>This is H1</H1>
                        <H2>This is H2</H2>
                        <H3>This is H3</H3>
                        <H4>This is H4</H4>
                        <P>This is P</P>
                    </Widget>
                    <SyntaxHighlighter
                        language='htmlbars'
                        style={dark}
                    >
                        {`
    <H1> This is H1 </H1>
    <H2> This is H2 </H2>
    <H3> This is H3 </H3>
    <H4> This is H4 </H4>
    <P> This is P </P>
                        `}
                    </SyntaxHighlighter>

                    {/* Font Weight */}
                    <Widget padded-xxl>
                        <P light>This is Light</P>
                        <P regular>This is Regular</P>
                        <P semi-bold>This Semi-bold </P>
                        <P bold>This is Bold</P>
                    </Widget>

                    {/* Font Colors */}
                    <Widget padded-xxl>
                        <P light-colored>This is light-colored</P>
                        <P lighter-colored>This is lighter-colored</P>
                        <P dark-colored>This dark-colored</P>
                        <P primary>This is primary</P>
                        <P secondary>This is secondary</P>
                        <P green>This is green</P>
                        <P blue>This is blue</P>
                        <P white-colored>This is Bold</P>
                    </Widget>

                    {/* Font Alignment */}
                    <Widget padded-xxl>
                        <P align-left>This is align-left</P>
                        <P align-center>This is align-center</P>
                        <P align-right>This align-right</P>
                    </Widget>

                </Scrollable>
            </Column>
        )
    }

}

export interface TypographyPageProps {
    goBack: () => any
}

export interface TypographyPageState {

}

export interface TypographyPageConnectedProps {

}
