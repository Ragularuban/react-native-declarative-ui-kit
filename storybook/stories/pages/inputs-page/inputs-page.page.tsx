import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { InputX } from "../../elements/inputs/input.element";
import { TextArea } from "../../elements/inputs/text-area.element";
import { UIConfigurations } from "../../config/config";


export class InputsPage extends React.PureComponent<InputsPageProps & Partial<InputsPageConnectedProps>, InputsPageState>{

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
            title: "Inputs Page"
        };
        return (
            <Column fill>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */}
                    <Widget no-margin padded-xxl>
                        <H1>Inputs Examples</H1>
                    </Widget>

                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <Box>
                            <InputX primary placeholder={'primary'}></InputX>
                        </Box>
                    </Widget>
                    <Widget padded-xxl>
                        <Box>
                            <InputX success placeholder={'success'}></InputX>
                        </Box>
                    </Widget>
                    <Widget padded-xxl>
                        <Box>
                            <InputX warning placeholder={'warning'}></InputX>
                        </Box>
                    </Widget>
                    <Widget padded-xxl>
                        <Box>
                            <InputX danger placeholder={'danger'} icon={'ios-search'}></InputX>
                        </Box>
                    </Widget>
                    <Widget padded-xxl>
                        <Box>
                            <InputX width={30} info placeholder={'info'}></InputX>
                        </Box>
                    </Widget>

                    {/* Simple Box */}
                    <Widget padded-xxl>
                        <InputX text-area info placeholder={'info'}></InputX>
                    </Widget>
                </Scrollable>
            </Column >
        )
    }

}

export interface InputsPageProps {
    goBack?: () => any
}

export interface InputsPageState {

}

export interface InputsPageConnectedProps {

}
