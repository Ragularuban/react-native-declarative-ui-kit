import * as React from "react";
import { Column, Scrollable } from "../../layout/layout";
import { Widget } from "../../elements/card/card.element";
import { H1 } from "../../typography/typography";
import { CheckBoX } from "../../elements/check-box/check-box.element";
import { RadioButton } from "../../elements/radio-button/radio-button.element";



export class RadioButtonPage extends React.PureComponent<RadioButtonPageProps & Partial<RadioButtonPageConnectedProps>, RadioButtonPageState>{

    static defaultProps = {

    }

    state = {

    }

    UIActions = {

    }

    action = {

    }

    render() {


        return (
            <Column fill>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */}
                    <Widget no-margin padded-xxl>
                        <H1>Radio Button Examples</H1>
                    </Widget>

                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <RadioButton animate success onChange={(toggle) => console.log(toggle)} />
                    </Widget>

                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        {/* <CheckBoX animate warning /> */}
                    </Widget>

                </Scrollable>
            </Column >
        )
    }

}

export interface RadioButtonPageProps {
    goBack?: () => any
}

export interface RadioButtonPageState {

}

export interface RadioButtonPageConnectedProps {

}
