import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { ButtonX } from "../../elements/button/button.element";
import { View } from "react-native";
import { ifSmallerScreen } from "../../../ui-helpers/is-smaller-screen";


export class BottomBar extends React.PureComponent<BottomBarProps, BottomBarState>{

    render() {
        return (
            <AnimatedBox animation="slideInUp" easing="ease-out" delay={this.props.noDelay ? 0 : 500} duration={400}>
                <Widget background={this.props.transparent ? 'transparent' : 'white'} no-margin height={ifSmallerScreen(60,80)} style={{ borderWidth: 1, borderColor: '#dfdfdf' }} stretched middle>
                    <Row space-between stretched fill>
                        {
                            (this.props.left || this.props.right) &&
                            <Box fill-quarter flex_start middle>
                                {this.props.left || <View />}
                            </Box>
                        }
                        <Box fill-half={Boolean((this.props.left || this.props.right))} fill={!(this.props.left || this.props.right)} center padded middle>
                            {this.props.center || <View />}
                        </Box>
                        {
                            (this.props.left || this.props.right) &&
                            <Row fill-quarter flex_end middle>
                                {this.props.right || <View />}
                            </Row>
                        }

                    </Row>
                </Widget>
            </AnimatedBox>
        )
    }
}

export interface BottomBarProps {
    left?: JSX.Element;
    right?: JSX.Element;
    center?: JSX.Element;
    noDelay?: boolean,
    transparent?:boolean
}

export interface BottomBarState {

}
