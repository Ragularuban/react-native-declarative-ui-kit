import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import ProgressBar from "../../elements/progress-bar/progress-bar.component";


export class ProgressBarsPage extends React.PureComponent<ProgressBarsPageProps & Partial<ProgressBarsPageConnectedProps>, ProgressBarsPageState>{

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
            title: "Progress Bars Page"
        };
        return (
            <Column fill>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */}
                    <Widget no-margin padded-xxl>
                        <H1>Progress Bar Examples</H1>
                    </Widget>

                     {/* Simple Box */}
                     <Widget padded-xxl>
                        <ProgressBar progress={0.1} width={100} isValueDisplay={false}></ProgressBar>

                        <ProgressBar progress={0.4} width={100} isValueDisplay={false}></ProgressBar>

                        <ProgressBar progress={0.8} width={100} isValueDisplay={false}></ProgressBar>
                    </Widget>
                </Scrollable>
            </Column>
        )
    }

}

export interface ProgressBarsPageProps {
    goBack: () => any
}

export interface ProgressBarsPageState {

}

export interface ProgressBarsPageConnectedProps {

}
