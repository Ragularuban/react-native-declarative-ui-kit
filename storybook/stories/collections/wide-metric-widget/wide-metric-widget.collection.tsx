import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box, GradientBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";


export class WideMetricWidget extends React.PureComponent<WideMetricWidgetProps, WideMetricWidgetState>{

    onPress = () => {
        this.props.onPress(this.props.metricId);
    }

    render() {
        return (
            <Row>
                <Touchable fill margin-xl onPress={this.onPress} delayPressIn={200}>
                    <GradientBox pallet={this.props.pallet || "red"} borderRadius={5} padded>
                        <H2 white-colored regular>{this.props.metric}</H2>
                        <Row flex_end padded no-top-padding>
                            <Column flex_end>
                                <H3 white-colored regular>{this.props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</H3>
                                {
                                    Boolean(this.props.today) &&
                                    <P white-colored regular>Today : +{this.props.today.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</P>
                                }
                            </Column>
                        </Row>
                    </GradientBox>
                </Touchable>
            </Row>
        );
    }
}

export interface WideMetricWidgetProps {
    pallet?: string,
    metricId: string,
    metric: string,
    total: number,
    today?: number,
    onPress?: (metricId: string) => any
}

export interface WideMetricWidgetState {

}
