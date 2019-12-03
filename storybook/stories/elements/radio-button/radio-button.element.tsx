import { ReactElement } from 'react';
import * as React from 'react';
import { TouchableOpacity, View, Text, ViewStyle, RegisteredStyle, ImageStyle, TextStyle, StyleSheet, TextInput, TextInputProps, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { Touchable, Box, AnimatedBox, Row } from '../../layout/layout';
import { Icon, IconName } from '../icon/icon.element';
import { H3, P } from '../../typography/typography';
import { UIConfigurations } from '../../config/config';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';
import { ifSmallerScreen } from '../../../ui-helpers/is-smaller-screen';


export class _RadioButton extends React.PureComponent<RadioButtonProps> {

  state = {
    RadioButtonToggle: false
  }

  UIActions = {
    RadioButtonToggle: () => {
      this.state.RadioButtonToggle ? (this.setState({ RadioButtonToggle: false }), this.props.onChange(false)) : (this.setState({ RadioButtonToggle: true }), this.props.onChange(true));
    }
  }


  render() {
    switch (this.props.type) {
      case RadioButtonType.LOADING: {
        return (
          <LoadingIndicator />
        )
      }
      // dev this if needed
      // case RadioButtonType.ICON: {
      //   let style = { ...this.props.style as any, ...{ backgroundColor: this.state.RadioButtonToggle ? this.props.backgroundColor._400 : this.props.backgroundColor._200 } }
      //   return (
      //     <Row flex_start>
      //       <TouchableWithoutFeedback onPress={this.UIActions.RadioButtonToggle}>
      //         <View>
      //           <Box style={style} center middle>
      //             {
      //               this.state.RadioButtonToggle &&
      //               <AnimatedBox animation={this.props.animate ? 'rubberBand' : null} duration={1000} easing={'linear'}>
      //                 <Icon name={'ios-checkmark'} white small-x={this.props.iconLarge ? false : true} large={this.props.iconLarge ? true : false} />
      //               </AnimatedBox>
      //             }
      //           </Box>
      //         </View>
      //       </TouchableWithoutFeedback >
      //       <Box paddingLeft={10}>
      //         <P>lol</P>
      //       </Box>
      //     </Row>

      //   )
      // }
      default: {
        let style = { ...this.props.style as any, ...{ backgroundColor: UIConfigurations.global.colors.white } }
        let CircleSize = this.props.iconLarge ? 23 : 15;
        return (
          <TouchableWithoutFeedback onPress={this.UIActions.RadioButtonToggle}>
            <View>
              <Box style={style} center middle>
                {
                  this.state.RadioButtonToggle &&
                  <AnimatedBox animation={this.props.animate ? 'bounceIn' : null} duration={400} easing={'linear'}>
                    <Box backgroundColor={this.props.backgroundColor._500} width={CircleSize} height={CircleSize} borderRadius={50}>
                    </Box>
                  </AnimatedBox>
                }
              </Box>
            </View>
          </TouchableWithoutFeedback >
        )
      }
    }
  }
}


interface RadioButtonProps {
  // Button
  type: RadioButtonType,
  style: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
  onChange?: (toggle: boolean) => any;
  track?: string,
  isLeftAligned?: boolean,
  placeholder?: string,
  RNativeProps?: TextInputProps,
  animate?: boolean,
  size?: RadioButtonSize,
  backgroundColor?: colorPallet
  iconLarge?: boolean
}

interface colorPallet {
  _100: string;
  _200: string;
  _300: string;
  _400: string;
  _500: string;
  _600: string;
  _700: string;
  _800: string;
  _900: string;
}

export enum RadioButtonFloat {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

export enum RadioButtonSize {
  NORMAL = "NORMAL",
  SMALL = "SMALL"
}

export enum RadioButtonColor {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  WHITE = "WHITE",
  GREY = "GREY"
}

export enum RadioButtonType {
  BASIC = "BASIC",
  LABELED = "LABELED",
  ICON = "ICON",
  LOADING = "LOADING"
}


export const RadioButton = (props: {
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
  onChange: (toggle: boolean) => any,
  style?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
  track?: string,
  width?: number,
  placeholder?: string,
  animate?: boolean
}) => {

  function def(val) {

  }

  let radioButtonProps: RadioButtonProps = {
    // TextInput
    animate: props.animate,
    placeholder: props.placeholder,
    size: RadioButtonSize.SMALL,
    type: props.labeled ? RadioButtonType.ICON : null,
    style: {
      width: 20,
      height: 20,
      borderRadius: 50
    },
    onChange: props.onChange ? props.onChange : def
  };

  if (props.large) {
    radioButtonProps.style = {
      ...radioButtonProps.style as any,
      ...{
        width: 30,
        height: 30
      }
    }
    radioButtonProps.iconLarge = true;
  } else {
    radioButtonProps.style = {
      ...radioButtonProps.style as any,
      ...{
        width: 20,
        height: 20
      }
    }
  }

  if (props.basic) {
    radioButtonProps.style = {
      ...radioButtonProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._basic._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._basic._400
      }
    }
    radioButtonProps.backgroundColor = UIConfigurations.global.colors._basic
  } else if (props.success) {
    radioButtonProps.style = {
      ...radioButtonProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._success._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._success._400
      }
    }
    radioButtonProps.backgroundColor = UIConfigurations.global.colors._success
  } else if (props.warning) {
    radioButtonProps.style = {
      ...radioButtonProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._warning._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._warning._400
      }
    }
    radioButtonProps.backgroundColor = UIConfigurations.global.colors._warning
  } else if (props.danger) {
    radioButtonProps.style = {
      ...radioButtonProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._danger._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._danger._400
      }
    }
    radioButtonProps.backgroundColor = UIConfigurations.global.colors._danger
  } else if (props.info) {
    radioButtonProps.style = {
      ...radioButtonProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._info._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._info._400
      }
    }
    radioButtonProps.backgroundColor = UIConfigurations.global.colors._info
  }
  else {
    radioButtonProps.style = {
      ...radioButtonProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._primary._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._primary._400
      }
    }
    radioButtonProps.backgroundColor = UIConfigurations.global.colors._primary
  }



  if (props.style) {
    Object.assign(radioButtonProps.style, props.style);
  }

  if (props.isLoading) {
    radioButtonProps.type = RadioButtonType.LOADING;
  }

  if (props.width) {
    // Todo: Not fully compatible with stylesheet
    (radioButtonProps.style as any).width = props.width;
  }


  // return radioButtonProps;
  return <_RadioButton {...radioButtonProps} />
};