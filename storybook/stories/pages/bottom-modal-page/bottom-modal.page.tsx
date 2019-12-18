import * as React from "react";
import { Column, Scrollable } from "../../layout/layout";
import { Widget } from "../../elements/card/card.element";
import { H1, P } from "../../typography/typography";
import { CheckBoX } from "../../elements/check-box/check-box.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";




export class BottomModalPage extends React.PureComponent<BottomModalPageProps & Partial<BottomModalPageConnectedProps>, BottomModalPageState>{

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
            <Column fill page>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */}
                    <Widget no-margin padded-xxl>
                        <H1>Bottom Modal</H1>
                    </Widget>


                </Scrollable>

                <BottomBar
                    left={<P>lol</P>}
                    right={<P>lol</P>}
                    center={<ButtonX primary label={'Press Me'} />}
                />

            </Column >
        )
    }

}

export interface BottomModalPageProps {
    goBack?: () => any
}

export interface BottomModalPageState {

}

export interface BottomModalPageConnectedProps {

}
