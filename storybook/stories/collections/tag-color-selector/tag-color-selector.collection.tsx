import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Icon } from "../../elements/icon/icon.element";
import { RepostTagColors } from "../repost-frame/repost-frame.collection";


export class TagColorSelector extends React.PureComponent<TagColorSelectorProps, TagColorSelectorState>{

    render() {

        const isColorLightSelected = this.props.color == RepostTagColors.LIGHT;
        const isColorDarkSelected = this.props.color == RepostTagColors.DARK;

        return (
            <Row flex_start>
                <Touchable onPress={() => { this.props.onColorSelected(RepostTagColors.LIGHT) }} track={"clicked on light color in repost"}>
                    <Box background='#fff' width={50} height={50} borderRadius={5} marginRight={10} flex_start flex_top borderColor={'#f4f4f4'} borderWidth={1} />
                    {
                        isColorLightSelected &&
                        <Box absolute top={-10} right={0} white-bg borderRadius={24} width={24} height={24}>
                            <Icon name="ios-checkmark-circle" secondary />
                        </Box>
                    }
                </Touchable>
                <Touchable onPress={() => { this.props.onColorSelected(RepostTagColors.DARK) }} track={"clicked on dark color in repost"}>
                    <Box background='#333' width={50} height={50} borderRadius={5} marginRight={10} flex_start flex_top />
                    {
                        isColorDarkSelected &&
                        <Box absolute top={-10} right={0} white-bg borderRadius={24} width={24} height={24}>
                            <Icon name="ios-checkmark-circle" secondary />
                        </Box>
                    }
                </Touchable>
            </Row>
        )
    }
}

export interface TagColorSelectorProps {
    color: RepostTagColors,
    onColorSelected: (color: RepostTagColors) => any
}

export interface TagColorSelectorState {

}
