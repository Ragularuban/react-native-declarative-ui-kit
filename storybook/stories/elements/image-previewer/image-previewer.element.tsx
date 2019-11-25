import * as React from "react";
import { StatusBar } from 'react-native';
import Modal from "react-native-modal";
import { Assets } from "../../config/config";
import * as Expo from 'expo';
import { Box } from "../../layout/layout";
import ImageViewer from 'react-native-image-zoom-viewer';
import { LoadingIndicator } from "../loading-indicator/loading-indicator";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { ImageX } from "../image/image.element";

export class ImagePreviewer extends React.PureComponent<ImagePreviewerProps, any> {
    onCancel = () => {
        this.props.onHide();
    };

    renderFunctions = {
        emptyView: () => <Box />,
        loadingIndicator: () => <Box center middle fill><LoadingIndicator /></Box>,
        renderImage: (props) => <ImageX {...props} placeholder={Assets.loaders.loader3Dots} placeHolderStyle={{ width: 50 }} />
    }

    render() {

        const images = [
            {
                url: this.props.currentImage,
            }
        ]

        return (
            <Modal isVisible={this.props.isVisible} onBackButtonPress={this.onCancel} backdropOpacity={1} animationOut="zoomOut" {...{ deviceWidth: ScreenWidth }} >
                <StatusBar
                    translucent={false}
                    backgroundColor="rgba(0,0,0,1)"
                    barStyle={'light-content'}
                />
                <ImageViewer
                    imageUrls={images}
                    enableSwipeDown={true}
                    onCancel={this.onCancel}
                    renderIndicator={this.renderFunctions.emptyView}
                    saveToLocalByLongPress={false}
                    loadingRender={this.renderFunctions.emptyView}
                    renderImage={this.renderFunctions.renderImage}
                />
                {
                    this.props.footer && this.props.footer()
                }
            </Modal >
        )
    }
}

export interface ImagePreviewerProps {
    currentImage: string,
    isVisible: boolean,
    onHide: () => any,
    footer?: () => any
}