import * as React from "react";
import { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Assets } from "./../../config/config"
import { Row } from "../../layout/layout";
import { ImageX } from "../image/image.element";

export class LoadingIndicator extends Component<loadingIndicatorProps, loadingIndicatorState>{

    render() {
        return (
            <Row center middle>
                <ImageX source={Assets.loaders.content_loading} width={90} height={60} />
            </Row>
        )
    }
}

export interface loadingIndicatorProps {

}

export interface loadingIndicatorState {

}