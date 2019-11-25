import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ImageX } from "../../elements/image/image.element";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";


export class GridImage extends React.PureComponent<GridImageProps, GridImageState>{

    onSelected = () => {
        this.props.onSelected(this.props.id);
    }

    onLongPress = () => {
        if(this.props.onLongPress){
            this.props.onLongPress(this.props.id, this.props.image);
        }
    }

    render() {
        return (
            <Touchable add-margin center middle onPress={this.onSelected} onLongPress={this.onLongPress}>
                <ImageX source={{ uri: this.props.image }} height={((ScreenWidth - 40) / this.props.column) - 10} width={((ScreenWidth - 40) / this.props.column) - 10} borderRadius={5} cropped resizeMode="cover" />
            </Touchable>
        )
    }
}

export interface GridImageProps {
    id: string;
    image: string;
    column: number,
    onSelected: (id: string) => any
    onLongPress?: (id: string, url: string) => any
}

export interface GridImageState {

}
