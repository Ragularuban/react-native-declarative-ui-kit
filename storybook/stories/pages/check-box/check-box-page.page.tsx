import * as React from "react";
import { Column, Scrollable } from "../../layout/layout";
import { Widget } from "../../elements/card/card.element";
import { H1 } from "../../typography/typography";
import { CheckBoX } from "../../elements/check-box/check-box.element";




export class CheckBoxPage extends React.PureComponent<CheckBoxPageProps & Partial<CheckBoxPageConnectedProps>, CheckBoxPageState>{

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
                        <CheckBoX animate warning large onChange={(toggle) => console.log('lol')}  />
                    </Widget>

                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <CheckBoX animate warning vibrate/>
                    </Widget>

                </Scrollable>
            </Column >
        )
    }

}

export interface CheckBoxPageProps {
    goBack?: () => any
}

export interface CheckBoxPageState {

}

export interface CheckBoxPageConnectedProps {

}
