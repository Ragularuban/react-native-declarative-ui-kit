import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { dark, rainbow, atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Picker } from "react-native";
import RNPickerSelect from 'react-native-picker-select';


export class LayoutPage extends React.PureComponent<LayoutPageProps & Partial<LayoutPageConnectedProps>, LayoutPageState>{

    static defaultProps = {

    }

    state = {
        language: ''
    }

    UIActions = {

    }

    action = {

    }

    render() {

        const pageHeaderProps = {
            onBackPressed: this.props.goBack,
            previousScreen: "Back",
            title: "Layout Page"
        };
        return (
            <Column fill>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */} 
                    <Widget no-margin padded-xxl>
                        <H1>Layout Examples</H1>
                    </Widget>

                    {/* Simple Box */}
                    <Widget padded-xxl>
                        <Box>
                            <P>I am inside  a simple Box Element</P>
                        </Box>
                    </Widget>

                    {/* Simple Row */}
                    <Widget padded-xxl>
                        <Row>
                            <Box width={50} height={50} background="#333" add-margin></Box>
                            <Box width={50} height={50} background="#333" add-margin></Box>
                            <Box width={50} height={50} background="#333" add-margin></Box>
                        </Row>
                    </Widget>

                    {/* Simple Column */}
                    <Widget padded-xxl>
                        <Column>
                            <Box width={50} height={50} background="#333" add-margin></Box>
                            <Box width={50} height={50} background="#333" add-margin></Box>
                            <Box width={50} height={50} background="#333" add-margin></Box>
                        </Column>
                    </Widget>

                    <Row space-between>
                        <P>Flex Arrangement: </P>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Row', value: 'row' },
                                { label: 'Column', value: 'column' },
                            ]}
                        />
                    </Row>

                    <Row space-between>
                        <P>Vertical Arrangement: </P>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Top', value: 'top' },
                                { label: 'Space Between', value: 'space-between' },
                                { label: 'Space Around', value: 'space-around' },
                                { label: 'Middle', value: 'middle' },
                                { label: 'Bottom', value: 'bottom' },
                            ]}
                        />
                    </Row>

                    <Row space-between>
                        <P>Horizontal Arrangement: </P>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Row', value: 'row' },
                                { label: 'Column', value: 'column' },
                            ]}
                        />
                    </Row>



                </Scrollable>
            </Column>
        )
    }

}

export interface LayoutPageProps {
    goBack: () => any
}

export interface LayoutPageState {

}

export interface LayoutPageConnectedProps {

}
