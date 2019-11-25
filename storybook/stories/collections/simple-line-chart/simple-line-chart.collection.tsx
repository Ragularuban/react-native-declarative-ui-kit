import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Defs, LinearGradient, Stop, Path, Circle, G, Text } from 'react-native-svg'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { UIConfigurations } from "../../config/config";

export class SimpleLineChart extends React.PureComponent<SimpleLineChartProps, SimpleLineChartState>{

    render() {
        const Gradient = () => (
            <G>
                <LinearGradient id={'gradient'} x1={'0'} y1={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'#1488CC'} />
                    <Stop offset={'100%'} stopColor={'#2B32B2'} />
                </LinearGradient>
            </G>
        )

        const LineX: any = ({ line }) => (
            <Path
                key={'line'}
                d={line}
                stroke={'#6594FF'}
                fill={'none'}
            />
        );

        const Decorator: any = ({ x, y, data }) => {
            return data.map((value, index) => (
                <G
                    key={index}
                >
                    <Circle
                        cx={x(index)}
                        cy={y(value)}
                        r={4}
                        stroke={'#1488CC'}
                        fill={'white'}
                    />
                    <Text
                        x={x(index)}
                        y={y(value) - 25}
                        alignmentBaseline={'middle'}
                        textAnchor={'middle'}
                        stroke={UIConfigurations.global.colors.primary}
                    >
                        {value}
                    </Text>
                </G>
            ))
        }

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 };
        const xAxisHeight = 10;
        const xInset = ((ScreenWidth - 70) / this.props.data.length) / 2;
        const xInsetH = 12;
        let horizontalInset;
        this.props.yAxisShow ?  horizontalInset = { left: xInset, right: xInset }:
         horizontalInset = { left: xInsetH, right: xInsetH };

        return (
            <Row style={{ height: 200, }} width={ScreenWidth+(this.props.data.length*35)}>
                {this.props.yAxisShow ? <YAxis
                    data={this.props.data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />:<Box/>
                }
                
                <Box fill marginLeft={10}>
                    <LineChart
                        style={{ height: 200 }}
                        data={this.props.data}
                        contentInset={{ ...{ top: 35 , bottom: 25 }, ...horizontalInset }}
                        svg={{
                            strokeWidth: 2,
                            stroke: 'url(#gradient)',
                        }}
                    // curve={ shape.curveNatural }
                    >
                        <Grid svg={{ stroke: 'rgba(0, 0, 0, 0.1)' }} />
                        <Gradient />
                        <LineX />
                        <Decorator />
                    </LineChart>
                    <XAxis
                        style={{ marginTop: 10 }}
                        data={this.props.data}
                        // scale={scale.scaleBand}
                        formatLabel={(value, index) => this.props.labels[index]}
                        labelStyle={{ color: 'black' }}
                        contentInset={horizontalInset}
                    />
                </Box>

            </Row>

        )
    }
}

export interface SimpleLineChartProps {
    data: number[];
    labels: string[];
    yAxisShow: boolean
}

export interface SimpleLineChartState {

}
