import { UIConfigurations } from "../config/config";
import { PaddingOptions } from "../layout/layout.helpers";
import { TextStyle, RegisteredStyle } from "react-native";

export function generateTypographyStyle(props) {
    let style = '';
    if (props.bold) {
        style += `font-family:'${UIConfigurations.global.font.bold}';`
    } else if (props.light) {
        style += `font-family:'${UIConfigurations.global.font.light}';`
    } else if (props.regular) {
        style += `font-family:'${UIConfigurations.global.font.regular}';`
    } else if (props["semi-bold"]) {
        style += `font-family:'${UIConfigurations.global.font.semiBold}';`
    }

    if (props.size) {
        style += `font-size:${props.size}px;`
    }

    if (props.color) {
        style += `color:${props.color};`
    }
    return style;
}

export function generateColorStyle(props) {
    let style = `color: ${UIConfigurations.global.colors.regular};`;
    if (props["light-colored"]) {
        style += `color: ${UIConfigurations.global.colors.light};`;
    } else if (props["lighter-colored"]) {
        style += `color: ${UIConfigurations.global.colors.lighter};`;
    } else if (props["dark-colored"]) {
        style += `color: ${UIConfigurations.global.colors.dark};`;
    } else if (props["darker-colored"]) {
        style += `color: ${UIConfigurations.global.colors.darker};`;
    } else if (props["primary"]) {
        style += `color: ${UIConfigurations.global.colors.primary};`;
    } else if (props["secondary"]) {
        style += `color: ${UIConfigurations.global.colors.secondary};`;
    } else if (props["green"]) {
        style += `color: ${UIConfigurations.global.colors.green};`;
    } else if (props["blue"]) {
        style += `color: ${UIConfigurations.global.colors.blue};`;
    } else if (props["white-colored"]) {
        style += `color: #fff;`;
    } else if (props["light-green"]) {
        style += `color: #2ecc71;`;
    }
    return style;
}

export type ColorOptions = "light-colored" | "lighter-colored" | "dark-colored" | "darker-colored" | "primary" | "secondary" | "green" | "blue" | "white-colored";

export type FontStyleOptions = "regular" | "bold" | "light" | "regular" | "semi-bold";

export type TextStylingOptions = {
    [key in FontStyleOptions | ColorOptions | PaddingOptions]?: boolean
}
export interface TypographyProps extends TextStylingOptions {
    children?: string | string[];
    size?: number;
    color?: string;
    style?: TextStyle | RegisteredStyle<TextStyle> | RegisteredStyle<TextStyle>[]
}

export function generateAlignmentProps(props) {
    let style = ``;
    if (props["align-left"]) {
        style += `text-align: left;`;
    } else if (props["align-center"]) {
        style += `text-align: center;`;
    } else if (props["align-right"]) {
        style += `text-align: right;`;
    }
    return style;
}