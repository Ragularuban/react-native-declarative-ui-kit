import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import * as shape from 'd3-shape';
import { AreaChart, YAxis, XAxis, BarChart, Grid } from 'react-native-svg-charts'
import { Path, Circle, G, Text, LinearGradient, Stop, Defs } from "react-native-svg";
import * as scale from 'd3-scale'
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";

export class SimpleBarChart extends React.PureComponent<SimpleBarChartProps, SimpleBarChartState>{

    render() {

        const Gradient = () => (
            <G>
                <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'#1488CC'} />
                    <Stop offset={'100%'} stopColor={'#2B32B2'} />
                </LinearGradient>
            </G>
        );

        const CUT_OFF = (Math.max(...this.props.data) - Math.min(...this.props.data)) / 2;
        const Labels: any = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={index}
                    x={x(index) + (bandwidth / 2)}
                    y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
                    fontSize={14}
                    fill={value >= CUT_OFF ? 'white' : 'black'}
                    alignmentBaseline={'middle'}
                    textAnchor={'middle'}
                >
                    {value}
                </Text>
            ))
        )

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30;

        const xInset = ((ScreenWidth - 70) / this.props.data.length) / 2;

        return (
            <Row style={{ height: 200, padding: 20 }} width={ScreenWidth - 50}>
                <YAxis
                    data={this.props.data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <Box fill marginLeft={10}>
                    <BarChart
                        style={{ flex: 1 }}
                        data={this.props.data}
                        gridMin={0}
                        contentInset={verticalContentInset}
                        svg={{ fill: 'url(#gradient)' }}
                    >
                        <Grid direction={Grid.Direction.HORIZONTAL} svg={{ stroke: 'rgba(0, 0, 0, 0.1)' }} />
                        <Labels />
                        <Gradient />
                    </BarChart>
                    <XAxis
                        style={{ marginTop: 10 }}
                        data={this.props.data}
                        // scale={scale.scaleBand}
                        formatLabel={(value, index) => this.props.labels[index]}
                        labelStyle={{ color: 'black' }}
                        contentInset={{ left: xInset, right: xInset }}
                    />
                </Box>

            </Row>
        )
    }
}

export interface SimpleBarChartProps {
    data: number[],
    labels: string[]
}

export interface SimpleBarChartState {

}
