import { ReactElement } from 'react';
import * as React from 'react';
import { TouchableOpacity, View, Text, ViewStyle, RegisteredStyle, ImageStyle, TextStyle, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Touchable, Box } from '../../layout/layout';
import { Icon, IconName } from '../icon/icon.element';
import { H3, P } from '../../typography/typography';
import { UIConfigurations } from '../../config/config';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';
import { ifSmallerScreen } from '../../../ui-helpers/is-smaller-screen';


export class _Button extends React.PureComponent<ButtonXProps> {
    render() {
        switch (this.props.type) {
            case ButtonXType.LOADING: {
                return (
                    <LoadingIndicator />
                )
            }
            case ButtonXType.ICON: {
                return (
                    <Touchable onPress={this.props.onPress} style={this.props.style} center middle track={this.props.track || this.props.label}>
                        <Icon name={this.props.icon} color={this.props.iconColor} size={this.props.iconSize} />
                    </Touchable>
                )
            }
            case ButtonXType.LABELED:
            case ButtonXType.BASIC:
            default: {
                return (
                    <Touchable onPress={this.props.onPress} style={this.props.style} center row middle track={this.props.track || this.props.label}>
                        <P style={this.props.labelStyle}>{this.props.label}</P>
                        {
                            this.props.icon &&
                            <Box padded-left={!this.props.isLeftAligned} padded-right={this.props.isLeftAligned} center middle>
                                <Icon name={this.props.icon} color={this.props.iconColor} size={this.props.iconSize} />
                            </Box>
                        }

                    </Touchable>
                )
            }
        }
    }
}


interface ButtonXProps {
    // Button
    type: ButtonXType,
    style: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
    onPress?: () => any;
    //Label
    label: string;
    labelStyle: TextStyle | RegisteredStyle<TextStyle> | RegisteredStyle<TextStyle>[],
    // Icon
    icon?: IconName,
    iconSize?: number,
    iconColor?: string,
    track?: string,
    isLeftAligned?: boolean
}

export enum ButtonXFloat {
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

export enum ButtonXSize {
    NORMAL = "NORMAL",
    SMALL = "SMALL"
}

export enum ButtonXColor {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    WHITE = "WHITE",
    GREY = "GREY"
}

export enum ButtonXType {
    BASIC = "BASIC",
    LABELED = "LABELED",
    ICON = "ICON",
    LOADING = "LOADING"
}


export const ButtonX = (props: {
    // Types
    basic?: boolean,
    labeled?: boolean,
    label?: string,
    icon?: IconName,
    // Multiple Sizes
    small?: boolean,
    large?: boolean,
    "large-x"?: boolean,
    // Coloring Options
    ghost?: boolean,
    // Button Colors & Label Colors
    primary?: boolean,
    success?: boolean,
    dark?: boolean,
    warning?: boolean,
    danger?: boolean,
    info?: boolean,
    disabled?: boolean,
    // Floated Options
    "float-left"?: boolean,
    "float-right"?: boolean,
    // Icon Positions
    "right-aligned-icon"?: boolean,
    "left-aligned-icon"?: boolean,
    // Border Radius
    rounded?: boolean
    outlined?: boolean
    // Special Props
    isLoading?: boolean;
    // Events
    onPress?: () => any,
    style?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
    track?: string,
    width?: number,
}) => {

    let buttonProps: ButtonXProps = {
        // Button
        type: ButtonXType.LABELED,
        style: {
            paddingVertical: props.label ? 10 : null
        },
        //Label
        label: props.label,
        labelStyle: {
            color: "#fff",
            fontSize: ifSmallerScreen(16, 18),
            textAlign: 'center'
        },
        // Icon
        icon: props.icon || props["primary-icon"] || props["secondary-icon"],
        iconSize: ifSmallerScreen(18, 20),
        iconColor: "#fff",
        onPress: props.disabled ? null : props.onPress,
        track: props.track,
        isLeftAligned: props["left-aligned-icon"]
    };

    // Support type based syntaxes
    if (props.basic) {
        buttonProps.type = ButtonXType.BASIC;
    } else if (props.labeled) {
        buttonProps.type = ButtonXType.LABELED;
    } else if (props.icon || props["primary-icon"]) {
        // This will be still fine logically (when it's not a labeled button and try to add icon, it could automatically convert to icon)
        buttonProps.type = ButtonXType.ICON;

    }



    // Support size based syntaxes
    if (props.small) {
        if (buttonProps.type == ButtonXType.ICON) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    borderRadius: props.rounded ? 50 : 8,
                    height: ifSmallerScreen(20, 40),
                    width: ifSmallerScreen(20, 40),
                }
            }

            buttonProps.iconSize = ifSmallerScreen(14, 22)

        } else {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    flexDirection: 'row',
                    padding: 10,
                    paddingLeft: ifSmallerScreen(10, 20),
                    paddingRight: ifSmallerScreen(10, 20),
                    borderRadius: props.rounded ? 50 : 8,
                    marginHorizontal: 30,
                }
            }
        }
        buttonProps.labelStyle = {
            ...buttonProps.labelStyle as any,
            ...{
                fontSize: ifSmallerScreen(12, 14)
            }
        };

    } else if (props.large) {
        if (buttonProps.type == ButtonXType.ICON) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    borderRadius: props.rounded ? 50 : 8,
                    height: ifSmallerScreen(30, 60),
                    width: ifSmallerScreen(30, 60),
                }
            }
            buttonProps.iconSize = ifSmallerScreen(18, 32);

        } else {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    flexDirection: 'row',
                    padding: ifSmallerScreen(5, 10),
                    paddingLeft: ifSmallerScreen(20, 40),
                    paddingRight: ifSmallerScreen(20, 40),
                    // minWidth: 180,
                    minHeight: ifSmallerScreen(20, 40),
                    borderRadius: props.rounded ? 50 : 8
                }
            }
        }
    } else if (props["large-x"]) {
        if (buttonProps.type == ButtonXType.ICON) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    borderRadius: props.rounded ? 50 : 8,
                    height: ifSmallerScreen(40, 80),
                    width: ifSmallerScreen(40, 80),
                }
            }
            buttonProps.iconSize = ifSmallerScreen(20, 40);

        } else {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    flexDirection: 'row',
                    padding: ifSmallerScreen(7.5, 15),
                    paddingLeft: ifSmallerScreen(25, 50),
                    paddingRight: ifSmallerScreen(25, 50),
                    // minWidth: 180,
                    minHeight: ifSmallerScreen(25, 50),
                    borderRadius: props.rounded ? 50 : 8
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    fontSize: ifSmallerScreen(16, 22)
                }
            }
        }
    } else {
        //Normal
        if (buttonProps.type == ButtonXType.ICON) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    borderRadius: props.rounded ? 50 : 8,
                    height: ifSmallerScreen(20, 40),
                    width: ifSmallerScreen(20, 40),
                }
            }

            buttonProps.iconSize = ifSmallerScreen(14, 26);

        } else {

            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    flexDirection: 'row',
                    padding: ifSmallerScreen(3.5, 7),
                    paddingLeft: ifSmallerScreen(15, 30),
                    paddingRight: ifSmallerScreen(15, 30),
                    borderRadius: props.rounded ? 50 : 8,
                }
            }
        }
    }

    // Support color based syntaxes
    if (!props.ghost) {
        if (props.success) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: UIConfigurations.global.colors.success
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: "#fff"
                }
            }
            buttonProps.iconColor = "#fff";
        } else if (props.dark) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: UIConfigurations.global.colors.dark
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: "#fff"
                }
            }
            buttonProps.iconColor = "#fff";
        }
        else if (props.danger) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: UIConfigurations.global.colors.danger
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: "#fff"
                }
            }
            buttonProps.iconColor = "#fff";
        } else if (props.warning) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: UIConfigurations.global.colors.warning
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: "#fff"
                }
            }
            buttonProps.iconColor = "#fff";
        }
        else if (props.info) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: UIConfigurations.global.colors.info
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: "#fff"
                }
            }
            buttonProps.iconColor = "#fff";
        }
        else if (props.disabled) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: UIConfigurations.global.colors.smoke
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: "#fff"
                }
            }
            buttonProps.iconColor = "#fff";
        } else {
            // Primary
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: UIConfigurations.global.colors.primary
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: "#fff"
                }
            }
            buttonProps.iconColor = "#fff";
        }
    } else {
        if (props.success) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff"
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.success
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.success;
        } else if (props.dark) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff"
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.dark
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.dark;
        } else if (props.danger) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff"
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.danger
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.danger;
        } else if (props.warning) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff"
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.warning
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.warning;
        }
        else if (props.info) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff"
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.info
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.info;
        } else if (props.disabled) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff"
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.smoke
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.dark;
        } else {
            // Primary
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff"
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.primary
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.primary;
        }
        // Change Icon Color
        if (props["primary-icon"]) {
            buttonProps.iconColor = UIConfigurations.global.colors.primary;
        } else if (props["secondary-icon"]) {
            buttonProps.iconColor = UIConfigurations.global.colors.success;
        }
    }

    // outlined (outline and ghost does not work together)
    if (props.outlined && !props.ghost) {
        if (props.success) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: UIConfigurations.global.colors.primary
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.success
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.success;
        } else if (props.danger) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: UIConfigurations.global.colors.danger
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.danger
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.danger;
        } else if (props.warning) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: UIConfigurations.global.colors.warning
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.warning
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.warning;
        }
        else if (props.info) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: UIConfigurations.global.colors.info
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.info
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.info;
        } else if (props.dark) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: UIConfigurations.global.colors.primary
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.dark
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.dark;
        } else if (props.disabled) {
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: UIConfigurations.global.colors.primary
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.smoke
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.dark;
        } else {
            // Primary
            buttonProps.style = {
                ...buttonProps.style as any,
                ...{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: UIConfigurations.global.colors.primary
                }
            }
            buttonProps.labelStyle = {
                ...buttonProps.labelStyle as any,
                ...{
                    color: UIConfigurations.global.colors.primary
                }
            }
            buttonProps.iconColor = UIConfigurations.global.colors.primary;
        }
        // Change Icon Color
        if (props["primary-icon"]) {
            buttonProps.iconColor = UIConfigurations.global.colors.primary;
        } else if (props["secondary-icon"]) {
            buttonProps.iconColor = UIConfigurations.global.colors.success;
        }
    }


    // Support float based syntaxes
    if (props["float-left"]) {
        buttonProps.style = {
            ...buttonProps.style as any,
            ...{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
            }
        }
    } else if (props["float-right"]) {
        buttonProps.style = {
            ...buttonProps.style as any,
            ...{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            }
        }
    }

    if (props["left-aligned-icon"]) {
        buttonProps.style = {
            ...buttonProps.style as any,
            ...{
                flexDirection: 'row-reverse'
            }
        }
    } else {
        // right-aligned-icon

    }

    if (props.style) {
        Object.assign(buttonProps.style, props.style);
    }

    if (props.isLoading) {
        buttonProps.type = ButtonXType.LOADING;
    }

    if (props.width) {
        // Todo: Not fully compatible with stylesheet
        (buttonProps.style as any).width = props.width;
    }


    // return buttonProps;
    return <_Button {...buttonProps} />
};