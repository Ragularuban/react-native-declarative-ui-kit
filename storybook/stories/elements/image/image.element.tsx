import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, ImageURISource, ImageRequireSource, ViewStyle, RegisteredStyle, ImageStyle, TextStyle } from 'react-native';
import { Assets } from "../../config/config";
import { Image as CachedImage } from "react-native-expo-image-cache";

export class ImageX extends React.PureComponent<ImageXProps, any> {

    state = {
        imageLoaded: false
    };

    imageOnLoad = () => this.setState({ imageLoaded: true });

    render() {

        let imageStyle = [{ flex: 1, height: undefined, width: undefined }];
        let containerStyle = this.props.style ? StyleSheet.flatten(this.props.style) : {};
        // Generate Styles Based on Properties
        if (this.props.width) {
            containerStyle.width = this.props.width;
        }
        if (this.props.height) {
            containerStyle.height = this.props.height;
        } else if (this.props.width) {
            containerStyle.height = this.props.width;
        }

        if (this.props.borderRadius) {
            containerStyle.borderRadius = this.props.borderRadius;
        }
        if (this.props.cropped) {
            containerStyle.overflow = "hidden";
        }
        if (this.props.rounded && this.props.width) {
            containerStyle.borderRadius = this.props.width / 2;
            containerStyle.height = this.props.width;
            containerStyle.overflow = "hidden";
        }

        const innerContStyle: any = { position: 'absolute', width: containerStyle.width, height: containerStyle.height, top: 0, left: 0 };
        const cachedImageContStyle: any = { position: 'absolute', width: containerStyle.width, height: containerStyle.height, top: 0, left: 0, zIndex: 9 };
        const placeholderImage = this.props.placeholder || Assets.loaders.content_loading;

        const isRemoteImage = Boolean((this.props.source as any).uri) && !this.props.isLocalPath;

        return (
            <View style={containerStyle}>
                {
                    isRemoteImage ? (
                        <View style={cachedImageContStyle}>
                            <CachedImage style={containerStyle} resizeMode={this.props.resizeMode || "contain"} uri={(this.props.source as any).uri} tint="light" onLoad={this.imageOnLoad} />
                        </View>
                    ) : (
                            <View style={innerContStyle}>
                                <Image
                                    source={this.props.source}
                                    style={imageStyle}
                                    resizeMode={this.props.resizeMode || "contain"}
                                // onLoad={this.imageOnLoad}
                                />
                            </View>
                        )
                }
                {/* Added !this.state.imageLoaded condition on 15/03/2019 to optimize (not sure about the repercussion)  */}
                {
                    isRemoteImage &&
                    !this.state.imageLoaded && <View style={[innerContStyle, this.props.placeHolderStyle ? { alignItems: 'center', justifyContent: 'center' } : {}]}>
                        <Image source={placeholderImage} style={[...imageStyle, { zIndex: 1, opacity: this.state.imageLoaded ? 0 : 1 }, (this.props.placeHolderStyle || {})]} resizeMode={this.props.resizeMode || "contain"} />
                    </View>
                }

            </View >
        );
    }
}

export interface ImageXProps {
    style?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle | ImageStyle | TextStyle> | RegisteredStyle<ViewStyle | ImageStyle | TextStyle>[],
    resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
    source: ImageURISource | ImageURISource[] | ImageRequireSource;
    placeholder?: ImageURISource | ImageURISource[] | ImageRequireSource;
    placeHolderStyle?: ImageStyle | RegisteredStyle<ImageStyle>,
    width?: number;
    height?: number;
    borderRadius?: number;
    cropped?: boolean;
    rounded?: boolean;
    isLocalPath?: boolean
}