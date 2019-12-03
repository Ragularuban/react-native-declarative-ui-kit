import { ViewStyle, RegisteredStyle, Platform } from "react-native";
import { Omit } from "lodash";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { UIConfigurations } from "../config/config";
import { ifSmallerScreen } from "../../ui-helpers/is-smaller-screen";

// Generate Layout
export function getLayout(props: LayoutProps, isRow) {
    // Vertical Alignment
    let justifyContent = "center";
    let alignItems = "center";
    if (props.row) {
        isRow = true;
    }
    if (!isRow) {
        justifyContent = "flex-start";
        alignItems = "stretch";
    }

    if (isRow) {
        if (props.flex_top) {
            alignItems = "flex-start";
        } else if (props.flex_bottom) {
            alignItems = "flex-end";
        } else if (props.middle) {
            alignItems = "center";
        } else if (props.stretched) {
            alignItems = "stretch";
        }
        // Horizontal Alignment
        if (props.flex_start) {
            justifyContent = "flex-start";
        } else if (props.center) {
            justifyContent = "center";
        } else if (props.flex_end) {
            justifyContent = "flex-end";
        } else if (props["space-around"]) {
            justifyContent = "space-around";
        } else if (props["space-between"]) {
            justifyContent = "space-between";
        }
    } else {
        if (props.flex_top) {
            justifyContent = "flex-start";
        } else if (props.flex_bottom) {
            justifyContent = "flex-end";
        } else if (props.middle) {
            justifyContent = "center";
        } else if (props["space-around"]) {
            justifyContent = "space-around";
        } else if (props["space-between"]) {
            justifyContent = "space-between";
        }

        if (props.flex_start) {
            alignItems = "flex-start";
        } else if (props.center) {
            alignItems = "center";
        } else if (props.flex_end) {
            alignItems = "flex-end";
        } else if (props.stretched) {
            alignItems = "stretch";
        }
    }


    if (props.layout) {
        const components: string[] = props.layout.split(' ');

        // Read First Component
        switch (components[0]) {
            case "start": {
                justifyContent = "flex-start";
                break;
            }
            case "center": {
                justifyContent = "center";
                break;
            }
            case "end": {
                justifyContent = "flex-end";
                break;
            }
            case "space-around": {
                justifyContent = "space-around";
                break;
            }
            case "space-between": {
                justifyContent = "space-between";
                break;
            }
        }

        // Read Second Component
        switch (components[1]) {
            case "start": {
                alignItems = "flex-start";
                break;
            }
            case "center": {
                alignItems = "center";
                break;
            }
            case "end": {
                alignItems = "flex-end";
                break;
            }
            case "stretched": {
                alignItems = "stretch";
                break;
            }
        }
    }

    let layoutStyle = `
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    `;

    layoutStyle = ifSmallerScreen(getPaddingForSmallerScreen(props, layoutStyle), getPaddingStyles(props, layoutStyle));
    layoutStyle = ifSmallerScreen(getMarginForSmallerScreen(props, layoutStyle), getMarginStyles(props, layoutStyle));

    if (props["no-margin"]) {
        layoutStyle += `margin:0px;`;
    }

    if (props.fill) {
        layoutStyle += `flex:1;`;
    } else if (props["fill-half"]) {
        layoutStyle += `flex:0.5;`;
    } else if (props["fill-quarter"]) {
        layoutStyle += `flex:0.25;`;
    }

    if (props.background) {
        layoutStyle += `backgroundColor:${props.background} !important;`;
    }

    if (props.row) {
        layoutStyle += `flex-direction:row;`;
    }

    if (props["white-bg"]) {
        layoutStyle += `backgroundColor:#fff;`;
    } else if (props["primary-bg"]) {
        layoutStyle += `backgroundColor:${UIConfigurations.global.colors.primary};`;
    } else if (props["secondary-bg"]) {
        layoutStyle += `backgroundColor:${UIConfigurations.global.colors.secondary};`;
    } else if (props["dark-bg"]) {
        layoutStyle += `backgroundColor:${UIConfigurations.global.colors.dark};`;
    }



    // if (props["border-radius"]) {
    //     layoutStyle += `borderRadius:${props["border-radius"]};`;
    // }
    if (props["borderRadius"]) {
        layoutStyle += `border-radius:${props["borderRadius"]};`;
    }

    if (props["absolute"]) {
        layoutStyle += `position:absolute;`;
    }




    return layoutStyle;
}


export function getPaddingStyles(props: iLayoutProps, layoutStyle = "") {
    if (props.padded) {
        layoutStyle += `padding:10px;`;
    } else if (props["padded-l"]) {
        layoutStyle += `padding:15px;`;
    } else if (props["padded-xl"]) {
        layoutStyle += `padding:20px;`;
    } else if (props["padded-xxl"]) {
        layoutStyle += `padding:25px;`;
    } else if (props["padded-3xl"]) {
        layoutStyle += `padding:30px;`;
    } else if (props["padded-4xl"]) {
        layoutStyle += `padding:40px;`;
    } else if (props["padded-5xl"]) {
        layoutStyle += `padding:50px;`;
    }

    if (props["padded-horizontal"]) {
        layoutStyle += `padding-left:10px;`;
        layoutStyle += `padding-right:10px;`;
    } else if (props["padded-horizontal-l"]) {
        layoutStyle += `padding-left:15px;`;
        layoutStyle += `padding-right:15px;`;
    } else if (props["padded-horizontal-xl"]) {
        layoutStyle += `padding-left:20px;`;
        layoutStyle += `padding-right:20px;`;
    } else if (props["padded-horizontal-xxl"]) {
        layoutStyle += `padding-left:25px;`;
        layoutStyle += `padding-right:25px;`;
    } else if (props["padded-horizontal-3xl"]) {
        layoutStyle += `padding-left:30px;`;
        layoutStyle += `padding-right:30px;`;
    } else if (props["padded-horizontal-4xl"]) {
        layoutStyle += `padding-left:40px;`;
        layoutStyle += `padding-right:40px;`;
    } else if (props["padded-horizontal-5xl"]) {
        layoutStyle += `padding-left:50px;`;
        layoutStyle += `padding-right:50px;`;
    }

    if (props["padded-vertical"]) {
        layoutStyle += `padding-bottom:10px;`;
        layoutStyle += `padding-top:10px;`;
    } else if (props["padded-vertical-l"]) {
        layoutStyle += `padding-bottom:15px;`;
        layoutStyle += `padding-top:15px;`;
    } else if (props["padded-vertical-xl"]) {
        layoutStyle += `padding-bottom:20px;`;
        layoutStyle += `padding-top:20px;`;
    } else if (props["padded-vertical-xxl"]) {
        layoutStyle += `padding-bottom:25px;`;
        layoutStyle += `padding-top:25px;`;
    } else if (props["padded-vertical-3xl"]) {
        layoutStyle += `padding-bottom:30px;`;
        layoutStyle += `padding-top:30px;`;
    } else if (props["padded-vertical-4xl"]) {
        layoutStyle += `padding-bottom:40px;`;
        layoutStyle += `padding-top:40px;`;
    } else if (props["padded-vertical-5xl"]) {
        layoutStyle += `padding-bottom:50px;`;
        layoutStyle += `padding-top:50px;`;
    }

    if (props["padded-left"]) {
        layoutStyle += `padding-left:10px;`;
    } else if (props["padded-left-l"]) {
        layoutStyle += `padding-left:15px;`;
    } else if (props["padded-left-xl"]) {
        layoutStyle += `padding-left:20px;`;
    } else if (props["padded-left-xxl"]) {
        layoutStyle += `padding-left:25px;`;
    } else if (props["padded-left-3xl"]) {
        layoutStyle += `padding-left:30px;`;
    } else if (props["padded-left-4xl"]) {
        layoutStyle += `padding-left:40px;`;
    } else if (props["padded-left-5xl"]) {
        layoutStyle += `padding-left:50px;`;
    }

    if (props["padded-right"]) {
        layoutStyle += `padding-right:10px;`;
    } else if (props["padded-right-l"]) {
        layoutStyle += `padding-right:15px;`;
    } else if (props["padded-right-xl"]) {
        layoutStyle += `padding-right:20px;`;
    } else if (props["padded-right-xxl"]) {
        layoutStyle += `padding-right:25px;`;
    } else if (props["padded-right-3xl"]) {
        layoutStyle += `padding-right:30px;`;
    } else if (props["padded-right-4xl"]) {
        layoutStyle += `padding-right:40px;`;
    } else if (props["padded-right-5xl"]) {
        layoutStyle += `padding-right:50px;`;
    }

    if (props["padded-top"]) {
        layoutStyle += `padding-top:10px;`;
    } else if (props["padded-top-l"]) {
        layoutStyle += `padding-top:15px;`;
    } else if (props["padded-top-xl"]) {
        layoutStyle += `padding-top:20px;`;
    } else if (props["padded-top-xxl"]) {
        layoutStyle += `padding-top:25px;`;
    } else if (props["padded-top-3xl"]) {
        layoutStyle += `padding-top:30px;`;
    } else if (props["padded-top-4xl"]) {
        layoutStyle += `padding-top:40px;`;
    } else if (props["padded-top-5xl"]) {
        layoutStyle += `padding-top:50px;`;
    }

    if (props["padded-bottom"]) {
        layoutStyle += `padding-bottom:10px;`;
    } else if (props["padded-bottom-l"]) {
        layoutStyle += `padding-bottom:15px;`;
    } else if (props["padded-bottom-xl"]) {
        layoutStyle += `padding-bottom:20px;`;
    } else if (props["padded-bottom-xxl"]) {
        layoutStyle += `padding-bottom:25px;`;
    } else if (props["padded-bottom-3xl"]) {
        layoutStyle += `padding-bottom:30px;`;
    } else if (props["padded-bottom-4xl"]) {
        layoutStyle += `padding-bottom:40px;`;
    } else if (props["padded-bottom-5xl"]) {
        layoutStyle += `padding-bottom:50px;`;
    }

    if (props["no-padding"]) {
        layoutStyle += `padding:0px;`;
    } else if (props["no-left-padding"]) {
        layoutStyle += `padding-left:0px;`;
    } else if (props["no-right-padding"]) {
        layoutStyle += `padding-right:0px;`;
    } else if (props["no-top-padding"]) {
        layoutStyle += `padding-top:0px;`;
    } else if (props["no-bottom-padding"]) {
        layoutStyle += `padding-bottom:0px;`;
    }

    return layoutStyle;
}

export function getMarginStyles(props: iLayoutProps, layoutStyle = "") {
    if (props["add-margin"]) {
        layoutStyle += `margin:10px;`;
    } else if (props["margin-l"]) {
        layoutStyle += `margin:15px;`;
    } else if (props["margin-xl"]) {
        layoutStyle += `margin:20px;`;
    } else if (props["margin-xxl"]) {
        layoutStyle += `margin:25px;`;
    } else if (props["margin-3xxl"]) {
        layoutStyle += `margin:30px;`;
    } else if (props["margin-4xxl"]) {
        layoutStyle += `margin:40px;`;
    } else if (props["margin-5xxl"]) {
        layoutStyle += `margin:50px;`;
    }

    if (props["margin-horizontal"]) {
        layoutStyle += `margin-left:10px;`;
        layoutStyle += `margin-right:10px;`;
    } else if (props["margin-horizontal-l"]) {
        layoutStyle += `margin-left:15px;`;
        layoutStyle += `margin-right:15px;`;
    } else if (props["margin-horizontal-xl"]) {
        layoutStyle += `margin-left:20px;`;
        layoutStyle += `margin-right:20px;`;
    } else if (props["margin-horizontal-xxl"]) {
        layoutStyle += `margin-left:25px;`;
        layoutStyle += `margin-right:25px;`;
    } else if (props["margin-horizontal-3xl"]) {
        layoutStyle += `margin-left:30px;`;
        layoutStyle += `margin-right:30px;`;
    } else if (props["margin-horizontal-4xl"]) {
        layoutStyle += `margin-left:40px;`;
        layoutStyle += `margin-right:40px;`;
    } else if (props["margin-horizontal-5xl"]) {
        layoutStyle += `margin-left:50px;`;
        layoutStyle += `margin-right:50px;`;
    }

    if (props["margin-vertical"]) {
        layoutStyle += `margin-bottom:10px;`;
        layoutStyle += `margin-top:10px;`;
    } else if (props["margin-vertical-l"]) {
        layoutStyle += `margin-bottom:15px;`;
        layoutStyle += `margin-top:15px;`;
    } else if (props["margin-vertical-xl"]) {
        layoutStyle += `margin-bottom:20px;`;
        layoutStyle += `margin-top:20px;`;
    } else if (props["margin-vertical-xxl"]) {
        layoutStyle += `margin-bottom:25px;`;
        layoutStyle += `margin-top:25px;`;
    } else if (props["margin-vertical-3xl"]) {
        layoutStyle += `margin-bottom:30px;`;
        layoutStyle += `margin-top:30px;`;
    } else if (props["margin-vertical-4xl"]) {
        layoutStyle += `margin-bottom:40px;`;
        layoutStyle += `margin-top:40px;`;
    } else if (props["margin-vertical-5xl"]) {
        layoutStyle += `margin-bottom:50px;`;
        layoutStyle += `margin-top:50px;`;
    }

    if (props["margin-left"]) {
        layoutStyle += `margin-left:10px;`;
    } else if (props["margin-left-l"]) {
        layoutStyle += `margin-left:15px;`;
    } else if (props["margin-left-xl"]) {
        layoutStyle += `margin-left:20px;`;
    } else if (props["margin-left-xxl"]) {
        layoutStyle += `margin-left:25px;`;
    } else if (props["margin-left-3xl"]) {
        layoutStyle += `margin-left:30px;`;
    } else if (props["margin-left-4xl"]) {
        layoutStyle += `margin-left:40px;`;
    } else if (props["margin-left-5xl"]) {
        layoutStyle += `margin-left:50px;`;
    }

    if (props["margin-right"]) {
        layoutStyle += `margin-right:10px;`;
    } else if (props["margin-right-l"]) {
        layoutStyle += `margin-right:15px;`;
    } else if (props["margin-right-xl"]) {
        layoutStyle += `margin-right:20px;`;
    } else if (props["margin-right-xxl"]) {
        layoutStyle += `margin-right:25px;`;
    } else if (props["margin-right-3xl"]) {
        layoutStyle += `margin-right:30px;`;
    } else if (props["margin-right-4xl"]) {
        layoutStyle += `margin-right:40px;`;
    } else if (props["margin-right-5xl"]) {
        layoutStyle += `margin-right:50px;`;
    }

    if (props["margin-top"]) {
        layoutStyle += `margin-top:10px;`;
    } else if (props["margin-top-l"]) {
        layoutStyle += `margin-top:15px;`;
    } else if (props["margin-top-xl"]) {
        layoutStyle += `margin-top:20px;`;
    } else if (props["margin-top-xxl"]) {
        layoutStyle += `margin-top:25px;`;
    } else if (props["margin-top-3xl"]) {
        layoutStyle += `margin-top:30px;`;
    } else if (props["margin-top-4xl"]) {
        layoutStyle += `margin-top:40px;`;
    } else if (props["margin-top-5xl"]) {
        layoutStyle += `margin-top:50px;`;
    }

    if (props["margin-bottom"]) {
        layoutStyle += `margin-bottom:10px;`;
    } else if (props["margin-bottom-l"]) {
        layoutStyle += `margin-bottom:15px;`;
    } else if (props["margin-bottom-xl"]) {
        layoutStyle += `margin-bottom:20px;`;
    } else if (props["margin-bottom-xxl"]) {
        layoutStyle += `margin-bottom:25px;`;
    } else if (props["margin-bottom-3xl"]) {
        layoutStyle += `margin-bottom:30px;`;
    } else if (props["margin-bottom-4xl"]) {
        layoutStyle += `margin-bottom:40px;`;
    } else if (props["margin-bottom-5xl"]) {
        layoutStyle += `margin-bottom:50px;`;
    }

    if (props["no-margin"]) {
        layoutStyle += `margin:0px;`;
    } else if (props["no-left-margin"]) {
        layoutStyle += `margin-left:0px;`;
    } else if (props["no-right-margin"]) {
        layoutStyle += `margin-right:0px;`;
    } else if (props["no-top-margin"]) {
        layoutStyle += `margin-top:0px;`;
    } else if (props["no-bottom-margin"]) {
        layoutStyle += `margin-bottom:0px;`;
    }
    return layoutStyle;
}

// for smaller screen sizes
// reduce half of padding & margin
export function getPaddingForSmallerScreen(props: iLayoutProps, layoutStyle = "") {
    if (props.padded) {
        layoutStyle += `padding:5px;`;
    } else if (props["padded-l"]) {
        layoutStyle += `padding:7.5px;`;
    } else if (props["padded-xl"]) {
        layoutStyle += `padding:10px;`;
    } else if (props["padded-xxl"]) {
        layoutStyle += `padding:12.5px;`;
    } else if (props["padded-3xl"]) {
        layoutStyle += `padding:15px;`;
    } else if (props["padded-4xl"]) {
        layoutStyle += `padding:20px;`;
    } else if (props["padded-5xl"]) {
        layoutStyle += `padding:25px;`;
    }

    if (props["padded-horizontal"]) {
        layoutStyle += `padding-left:5px;`;
        layoutStyle += `padding-right:5px;`;
    } else if (props["padded-horizontal-l"]) {
        layoutStyle += `padding-left:7.5px;`;
        layoutStyle += `padding-right:7.5px;`;
    } else if (props["padded-horizontal-xl"]) {
        layoutStyle += `padding-left:10px;`;
        layoutStyle += `padding-right:10px;`;
    } else if (props["padded-horizontal-xxl"]) {
        layoutStyle += `padding-left:12.5px;`;
        layoutStyle += `padding-right:12.5px;`;
    } else if (props["padded-horizontal-3xl"]) {
        layoutStyle += `padding-left:15px;`;
        layoutStyle += `padding-right:15px;`;
    } else if (props["padded-horizontal-4xl"]) {
        layoutStyle += `padding-left:20px;`;
        layoutStyle += `padding-right:20px;`;
    } else if (props["padded-horizontal-5xl"]) {
        layoutStyle += `padding-left:25px;`;
        layoutStyle += `padding-right:25px;`;
    }

    if (props["padded-vertical"]) {
        layoutStyle += `padding-bottom:5px;`;
        layoutStyle += `padding-top:5px;`;
    } else if (props["padded-vertical-l"]) {
        layoutStyle += `padding-bottom:7.5px;`;
        layoutStyle += `padding-top:7.5px;`;
    } else if (props["padded-vertical-xl"]) {
        layoutStyle += `padding-bottom:10px;`;
        layoutStyle += `padding-top:10px;`;
    } else if (props["padded-vertical-xxl"]) {
        layoutStyle += `padding-bottom:12.5px;`;
        layoutStyle += `padding-top:12.5px;`;
    } else if (props["padded-vertical-3xl"]) {
        layoutStyle += `padding-bottom:15px;`;
        layoutStyle += `padding-top:15px;`;
    } else if (props["padded-vertical-4xl"]) {
        layoutStyle += `padding-bottom:20px;`;
        layoutStyle += `padding-top:20px;`;
    } else if (props["padded-vertical-5xl"]) {
        layoutStyle += `padding-bottom:25px;`;
        layoutStyle += `padding-top:25px;`;
    }

    if (props["padded-left"]) {
        layoutStyle += `padding-left:5px;`;
    } else if (props["padded-left-l"]) {
        layoutStyle += `padding-left:7.5px;`;
    } else if (props["padded-left-xl"]) {
        layoutStyle += `padding-left:10px;`;
    } else if (props["padded-left-xxl"]) {
        layoutStyle += `padding-left:12.5px;`;
    } else if (props["padded-left-3xl"]) {
        layoutStyle += `padding-left:15px;`;
    } else if (props["padded-left-4xl"]) {
        layoutStyle += `padding-left:20px;`;
    } else if (props["padded-left-5xl"]) {
        layoutStyle += `padding-left:25px;`;
    }

    if (props["padded-right"]) {
        layoutStyle += `padding-right:5px;`;
    } else if (props["padded-right-l"]) {
        layoutStyle += `padding-right:7.5px;`;
    } else if (props["padded-right-xl"]) {
        layoutStyle += `padding-right:10px;`;
    } else if (props["padded-right-xxl"]) {
        layoutStyle += `padding-right:12.5px;`;
    } else if (props["padded-right-3xl"]) {
        layoutStyle += `padding-right:15px;`;
    } else if (props["padded-right-4xl"]) {
        layoutStyle += `padding-right:20px;`;
    } else if (props["padded-right-5xl"]) {
        layoutStyle += `padding-right:25px;`;
    }

    if (props["padded-top"]) {
        layoutStyle += `padding-top:5px;`;
    } else if (props["padded-top-l"]) {
        layoutStyle += `padding-top:7.5px;`;
    } else if (props["padded-top-xl"]) {
        layoutStyle += `padding-top:10px;`;
    } else if (props["padded-top-xxl"]) {
        layoutStyle += `padding-top:12.5px;`;
    } else if (props["padded-top-3xl"]) {
        layoutStyle += `padding-top:15px;`;
    } else if (props["padded-top-4xl"]) {
        layoutStyle += `padding-top:20px;`;
    } else if (props["padded-top-5xl"]) {
        layoutStyle += `padding-top:25px;`;
    }

    if (props["padded-bottom"]) {
        layoutStyle += `padding-bottom:5px;`;
    } else if (props["padded-bottom-l"]) {
        layoutStyle += `padding-bottom:7.5px;`;
    } else if (props["padded-bottom-xl"]) {
        layoutStyle += `padding-bottom:10px;`;
    } else if (props["padded-bottom-xxl"]) {
        layoutStyle += `padding-bottom:12.5px;`;
    } else if (props["padded-bottom-3xl"]) {
        layoutStyle += `padding-bottom:15px;`;
    } else if (props["padded-bottom-4xl"]) {
        layoutStyle += `padding-bottom:20px;`;
    } else if (props["padded-bottom-5xl"]) {
        layoutStyle += `padding-bottom:25px;`;
    }

    if (props["no-padding"]) {
        layoutStyle += `padding:0px;`;
    } else if (props["no-left-padding"]) {
        layoutStyle += `padding-left:0px;`;
    } else if (props["no-right-padding"]) {
        layoutStyle += `padding-right:0px;`;
    } else if (props["no-top-padding"]) {
        layoutStyle += `padding-top:0px;`;
    } else if (props["no-bottom-padding"]) {
        layoutStyle += `padding-bottom:0px;`;
    }

    return layoutStyle;
}

export function getMarginForSmallerScreen(props: iLayoutProps, layoutStyle = "") {
    if (props["add-margin"]) {
        layoutStyle += `margin:5px;`;
    } else if (props["margin-l"]) {
        layoutStyle += `margin:7.5px;`;
    } else if (props["margin-xl"]) {
        layoutStyle += `margin:10px;`;
    } else if (props["margin-xxl"]) {
        layoutStyle += `margin:12.5px;`;
    } else if (props["margin-3xxl"]) {
        layoutStyle += `margin:15px;`;
    } else if (props["margin-4xxl"]) {
        layoutStyle += `margin:20px;`;
    } else if (props["margin-5xxl"]) {
        layoutStyle += `margin:25px;`;
    }

    if (props["margin-horizontal"]) {
        layoutStyle += `margin-left:5px;`;
        layoutStyle += `margin-right:5px;`;
    } else if (props["margin-horizontal-l"]) {
        layoutStyle += `margin-left:7.5px;`;
        layoutStyle += `margin-right:7.5px;`;
    } else if (props["margin-horizontal-xl"]) {
        layoutStyle += `margin-left:10px;`;
        layoutStyle += `margin-right:10px;`;
    } else if (props["margin-horizontal-xxl"]) {
        layoutStyle += `margin-left:12.5px;`;
        layoutStyle += `margin-right:12.5px;`;
    } else if (props["margin-horizontal-3xl"]) {
        layoutStyle += `margin-left:15px;`;
        layoutStyle += `margin-right:15px;`;
    } else if (props["margin-horizontal-4xl"]) {
        layoutStyle += `margin-left:20px;`;
        layoutStyle += `margin-right:20px;`;
    } else if (props["margin-horizontal-5xl"]) {
        layoutStyle += `margin-left:25px;`;
        layoutStyle += `margin-right:25px;`;
    }

    if (props["margin-vertical"]) {
        layoutStyle += `margin-bottom:5px;`;
        layoutStyle += `margin-top:5px;`;
    } else if (props["margin-vertical-l"]) {
        layoutStyle += `margin-bottom:7.5px;`;
        layoutStyle += `margin-top:7.5px;`;
    } else if (props["margin-vertical-xl"]) {
        layoutStyle += `margin-bottom:10px;`;
        layoutStyle += `margin-top:10px;`;
    } else if (props["margin-vertical-xxl"]) {
        layoutStyle += `margin-bottom:12.5px;`;
        layoutStyle += `margin-top:12.5px;`;
    } else if (props["margin-vertical-3xl"]) {
        layoutStyle += `margin-bottom:15px;`;
        layoutStyle += `margin-top:15px;`;
    } else if (props["margin-vertical-4xl"]) {
        layoutStyle += `margin-bottom:20px;`;
        layoutStyle += `margin-top:20px;`;
    } else if (props["margin-vertical-5xl"]) {
        layoutStyle += `margin-bottom:25px;`;
        layoutStyle += `margin-top:25px;`;
    }

    if (props["margin-left"]) {
        layoutStyle += `margin-left:5px;`;
    } else if (props["margin-left-l"]) {
        layoutStyle += `margin-left:7.5px;`;
    } else if (props["margin-left-xl"]) {
        layoutStyle += `margin-left:10px;`;
    } else if (props["margin-left-xxl"]) {
        layoutStyle += `margin-left:12.5px;`;
    } else if (props["margin-left-3xl"]) {
        layoutStyle += `margin-left:15px;`;
    } else if (props["margin-left-4xl"]) {
        layoutStyle += `margin-left:20px;`;
    } else if (props["margin-left-5xl"]) {
        layoutStyle += `margin-left:25px;`;
    }

    if (props["margin-right"]) {
        layoutStyle += `margin-right:5px;`;
    } else if (props["margin-right-l"]) {
        layoutStyle += `margin-right:7.5px;`;
    } else if (props["margin-right-xl"]) {
        layoutStyle += `margin-right:10px;`;
    } else if (props["margin-right-xxl"]) {
        layoutStyle += `margin-right:12.5px;`;
    } else if (props["margin-right-3xl"]) {
        layoutStyle += `margin-right:15px;`;
    } else if (props["margin-right-4xl"]) {
        layoutStyle += `margin-right:20px;`;
    } else if (props["margin-right-5xl"]) {
        layoutStyle += `margin-right:25px;`;
    }

    if (props["margin-top"]) {
        layoutStyle += `margin-top:5px;`;
    } else if (props["margin-top-l"]) {
        layoutStyle += `margin-top:7.5px;`;
    } else if (props["margin-top-xl"]) {
        layoutStyle += `margin-top:10px;`;
    } else if (props["margin-top-xxl"]) {
        layoutStyle += `margin-top:12.5px;`;
    } else if (props["margin-top-3xl"]) {
        layoutStyle += `margin-top:15px;`;
    } else if (props["margin-top-4xl"]) {
        layoutStyle += `margin-top:20px;`;
    } else if (props["margin-top-5xl"]) {
        layoutStyle += `margin-top:25px;`;
    }

    if (props["margin-bottom"]) {
        layoutStyle += `margin-bottom:5px;`;
    } else if (props["margin-bottom-l"]) {
        layoutStyle += `margin-bottom:7.5px;`;
    } else if (props["margin-bottom-xl"]) {
        layoutStyle += `margin-bottom:10px;`;
    } else if (props["margin-bottom-xxl"]) {
        layoutStyle += `margin-bottom:12.5px;`;
    } else if (props["margin-bottom-3xl"]) {
        layoutStyle += `margin-bottom:15px;`;
    } else if (props["margin-bottom-4xl"]) {
        layoutStyle += `margin-bottom:20px;`;
    } else if (props["margin-bottom-5xl"]) {
        layoutStyle += `margin-bottom:25px;`;
    }

    if (props["no-margin"]) {
        layoutStyle += `margin:0px;`;
    } else if (props["no-left-margin"]) {
        layoutStyle += `margin-left:0px;`;
    } else if (props["no-right-margin"]) {
        layoutStyle += `margin-right:0px;`;
    } else if (props["no-top-margin"]) {
        layoutStyle += `margin-top:0px;`;
    } else if (props["no-bottom-margin"]) {
        layoutStyle += `margin-bottom:0px;`;
    }
    return layoutStyle;
}
// ........................

export function getSpecialProperties(props, layoutStyle = "") {
    if (props["page"]) {
        layoutStyle += `padding-top:${ifIphoneX(50, Platform.OS === 'ios' ? 20 : 0)}px; `;
    }
    return layoutStyle;
}

export type iLayoutProps = {
    [key in ChildPositioningOptions | PaddingOptions | MarginOptions]?: boolean;
}

export interface LayoutProps extends iLayoutProps {
    layout?: string;
    background?: string;
    "border-radius"?: number;

    height?: number;
    width?: number;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;

    "white-bg"?: boolean;
    " primary-bg"?: boolean;
    "secondary-bg"?: boolean;
    "dark-bg"?: boolean;
    "absolute"?: boolean;
    page?: boolean;

    children?: JSX.Element | JSX.Element[] | any;
    style?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[];
    ref?: (ref: any) => any
}

export type AnimationType = "bounce" | "flash" | "jello" | "pulse" | "rotate" | "rubberBand" | "shake" | "swing" | "tada" | "wobble" | "bounceIn" | "bounceInDown" | "bounceInUp" | "bounceInLeft" | "bounceInRight" | "bounceOut" | "bounceOutDown" | "bounceOutUp" | "bounceOutLeft" | "bounceOutRight" | "fadeIn" | "fadeInDown" | "fadeInDownBig" | "fadeInUp" | "fadeInUpBig" | "fadeInLeft" | "fadeInLeftBig" | "fadeInRight" | "fadeInRightBig" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY" | "lightSpeedIn" | "lightSpeedOut" | "slideInDown" | "slideInUp" | "slideInLeft" | "slideInRight" | "slideOutDown" | "slideOutUp" | "slideOutLeft" | "slideOutRight" | "zoomIn" | "zoomInDown" | "zoomInUp" | "zoomInLeft" | "zoomInRight" | "zoomOut" | "zoomOutDown" | "zoomOutUp" | "zoomOutLeft" | "zoomOutRight";

export type ChildPositioningOptions = "row" | "isRow" | "flex_top" | "flex_bottom" | "middle" | "stretched" | "flex_start" | "center" | "flex_end" | "space-around" | "space-between" | "fill" | "fill-quarter" | "fill-half";


export type PaddingOptions = "padded" | "padded-l" | "padded-xl" | "padded-xxl" | "padded-3xl" | "padded-4xl" | "padded-5xl" | "padded-horizontal" | "padded-horizontal-l" | "padded-horizontal-xl" | "padded-horizontal-xxl" | "padded-horizontal-3xl" | "padded-horizontal-4xl" | "padded-horizontal-5xl" | "padded-vertical" | "padded-vertical-l" | "padded-vertical-xl" | "padded-vertical-xxl" | "padded-vertical-3xl" | "padded-vertical-4xl" | "padded-vertical-5xl" | "padded-left" | "padded-left-l" | "padded-left-xl" | "padded-left-xxl" | "padded-left-3xl" | "padded-left-4xl" | "padded-left-5xl" | "padded-right" | "padded-right-l" | "padded-right-xl" | "padded-right-xxl" | "padded-right-3xl" | "padded-right-4xl" | "padded-right-5xl" | "padded-top" | "padded-top-l" | "padded-top-xl" | "padded-top-xxl" | "padded-top-3xl" | "padded-top-4xl" | "padded-top-5xl" | "padded-bottom" | "padded-bottom-l" | "padded-bottom-xl" | "padded-bottom-xxl" | "padded-bottom-3xl" | "padded-bottom-4xl" | "padded-bottom-5xl" | "no-padding" | "no-left-padding" | "no-right-padding" | "no-top-padding" | "no-bottom-padding";


export type MarginOptions = "add-margin" | "margin-l" | "margin-xl" | "margin-xxl" | "margin-3xxl" | "margin-4xxl" | "margin-5xxl" | "margin-horizontal" | "margin-horizontal-l" | "margin-horizontal-xl" | "margin-horizontal-xxl" | "margin-horizontal-3xl" | "margin-horizontal-4xl" | "margin-horizontal-5xl" | "margin-vertical" | "margin-vertical-l" | "margin-vertical-xl" | "margin-vertical-xxl" | "margin-vertical-3xl" | "margin-vertical-4xl" | "margin-vertical-5xl" | "margin-left" | "margin-left-l" | "margin-left-xl" | "margin-left-xxl" | "margin-left-3xl" | "margin-left-4xl" | "margin-left-5xl" | "margin-right" | "margin-right-l" | "margin-right-xl" | "margin-right-xxl" | "margin-right-3xl" | "margin-right-4xl" | "margin-right-5xl" | "margin-top" | "margin-top-l" | "margin-top-xl" | "margin-top-xxl" | "margin-top-3xl" | "margin-top-4xl" | "margin-top-5xl" | "margin-bottom" | "margin-bottom-l" | "margin-bottom-xl" | "margin-bottom-xxl" | "margin-bottom-3xl" | "margin-bottom-4xl" | "margin-bottom-5xl" | "no-margin" | "no-left-margin" | "no-right-margin" | "no-top-margin" | "no-bottom-margin";