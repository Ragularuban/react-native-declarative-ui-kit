// import styled from 'styled-components/native';

// export const Input = styled.TextInput`
//   height: 38px;
//   width: 100%;
//   border-radius: 20px;
//   border: solid 0.5px #ccc;
//   padding-left: 15px;
// `;


import { ReactElement } from 'react';
import * as React from 'react';
import { TouchableOpacity, View, Text, ViewStyle, RegisteredStyle, ImageStyle, TextStyle, StyleSheet, TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { Touchable, Box } from '../../layout/layout';
import { Icon, IconName } from '../icon/icon.element';
import { H3, P } from '../../typography/typography';
import { UIConfigurations } from '../../config/config';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';
import { ifSmallerScreen } from '../../../ui-helpers/is-smaller-screen';


export class _Input extends React.PureComponent<InputXProps> {
  render() {
    switch (this.props.type) {
      case InputXType.LOADING: {
        return (
          <LoadingIndicator />
        )
      }
      // case InputXType.ICON: {
      //     return (
      //         <Touchable onPress={this.props.onPress} style={this.props.style} center middle track={this.props.track || this.props.label}>
      //             <Icon name={this.props.icon} color={this.props.iconColor} size={this.props.iconSize} />
      //         </Touchable>
      //     )
      // }
      case InputXType.ICON: {
        return (
          <Box>
            <TextInput
              {...this.props.RNativeProps}
              placeholder={this.props.placeholder ? this.props.placeholder : 'Placeholder'}
              placeholderTextColor={'#BEBEBE'}
              style={this.props.style} />
            <Box absolute right={15} center middle height={40}>
              <Icon name={this.props.icon} small />
            </Box>
          </Box>
        )
      }
      default: {
        return (
          <TextInput
            {...this.props.RNativeProps}
            placeholder={this.props.placeholder ? this.props.placeholder : 'Placeholder'}
            placeholderTextColor={'#BEBEBE'}
            style={this.props.style} />
        )
      }
    }
  }
}


interface InputXProps {
  // Button
  type: InputXType,
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
  isLeftAligned?: boolean,
  placeholder?: string,
  RNativeProps?: TextInputProps
}

export enum InputXFloat {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

export enum InputXSize {
  NORMAL = "NORMAL",
  SMALL = "SMALL"
}

export enum InputXColor {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  WHITE = "WHITE",
  GREY = "GREY"
}

export enum InputXType {
  BASIC = "BASIC",
  LABELED = "LABELED",
  ICON = "ICON",
  LOADING = "LOADING"
}


export const InputX = (props: {
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
  placeholder?: string,
  RNativeProps?: TextInputProps
}) => {

  let inputProps: InputXProps = {
    // TextInput
    RNativeProps: props.RNativeProps,
    placeholder: props.placeholder,
    type: null,
    style: {
      height: 38,
      width: "100%",
      borderRadius: 6,
      borderWidth: 0.5,
      borderColor: "#979797",
      paddingLeft: 15,
      backgroundColor: "#F8F8F8"
    },
    icon: props.icon,
    //Label
    label: props.label,
    labelStyle: {
      color: "#fff",
      fontSize: ifSmallerScreen(16, 18),
      textAlign: 'center'
    }
  };

  if (props.icon) {
    inputProps.type = InputXType.ICON
    inputProps.style = {
      ...inputProps.style as any,
      ...{
        paddingRight: 26
      }
    }
  }

  if (props.primary) {
    inputProps.style = {
      ...inputProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors.primary,
      }
    }
  } else if (props.success) {
    inputProps.style = {
      ...inputProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors.success,
      }
    }
  } else if (props.warning) {
    inputProps.style = {
      ...inputProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors.warning,
      }
    }
  } else if (props.danger) {
    inputProps.style = {
      ...inputProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors.danger,
      }
    }
  } else if (props.info) {
    inputProps.style = {
      ...inputProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors.info,
      }
    }
  }

  if (props.style) {
    Object.assign(inputProps.style, props.style);
  }

  if (props.isLoading) {
    inputProps.type = InputXType.LOADING;
  }

  if (props.width) {
    // Todo: Not fully compatible with stylesheet
    (inputProps.style as any).width = props.width;
  }


  // return inputProps;
  return <_Input {...inputProps} />
};