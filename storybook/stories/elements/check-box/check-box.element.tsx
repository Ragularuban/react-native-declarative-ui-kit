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


export class _CheckBox extends React.PureComponent<CheckBoXProps> {

  state = {
    checkBoxToggle: false
  }

  UIActions = {
    checkBoxToggle: () => {
      this.state.checkBoxToggle ? (this.setState({ checkBoxToggle: false }), this.props.onChange(false)) : (this.setState({ checkBoxToggle: true }), this.props.onChange(true));
    }
  }

  render() {
    switch (this.props.type) {
      case CheckBoXType.LOADING: {
        return (
          <LoadingIndicator />
        )
      }
      // dev this if needed
      // case CheckBoXType.ICON: {
      //   let style = { ...this.props.style as any, ...{ backgroundColor: this.state.checkBoxToggle ? this.props.backgroundColor._400 : this.props.backgroundColor._200 } }
      //   return (
      //     <Row flex_start>
      //       <TouchableWithoutFeedback onPress={this.UIActions.checkBoxToggle}>
      //         <View>
      //           <Box style={style} center middle>
      //             {
      //               this.state.checkBoxToggle &&
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
        let style = { ...this.props.style as any, ...{ backgroundColor: this.state.checkBoxToggle ? this.props.backgroundColor._400 : this.props.backgroundColor._200 } }
        return (
          <TouchableWithoutFeedback onPress={this.UIActions.checkBoxToggle}>
            <View>
              <Box style={style} center middle>
                {
                  this.state.checkBoxToggle &&
                  <AnimatedBox animation={this.props.animate ? 'rubberBand' : null} duration={1000} easing={'linear'}>
                    <Icon name={'ios-checkmark'} white small-x={this.props.iconLarge ? false : true} large={this.props.iconLarge ? true : false} />
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


interface CheckBoXProps {
  // Button
  type: CheckBoXType,
  style: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
  onChange?: (toggle: boolean) => any;
  track?: string,
  isLeftAligned?: boolean,
  placeholder?: string,
  RNativeProps?: TextInputProps,
  animate?: boolean,
  size?: CheckBoXSize,
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

export enum CheckBoXFloat {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

export enum CheckBoXSize {
  NORMAL = "NORMAL",
  SMALL = "SMALL"
}

export enum CheckBoXColor {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  WHITE = "WHITE",
  GREY = "GREY"
}

export enum CheckBoXType {
  BASIC = "BASIC",
  LABELED = "LABELED",
  ICON = "ICON",
  LOADING = "LOADING"
}


export const CheckBoX = (props: {
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


  let checkboxProps: CheckBoXProps = {
    // TextInput
    animate: props.animate,
    placeholder: props.placeholder,
    size: CheckBoXSize.SMALL,
    type: props.labeled ? CheckBoXType.ICON : null,
    style: {
      width: 20,
      height: 20,
    },
    onChange: props.onChange ? props.onChange : def
  };

  if (props.large) {
    checkboxProps.style = {
      ...checkboxProps.style as any,
      ...{
        width: 30,
        height: 30
      }
    }
    checkboxProps.iconLarge = true;
  } else {
    checkboxProps.style = {
      ...checkboxProps.style as any,
      ...{
        width: 20,
        height: 20
      }
    }
  }

  if (props.basic) {
    checkboxProps.style = {
      ...checkboxProps.style as any,
      ...{
        borderRadius: 2,
        borderColor: UIConfigurations.global.colors._basic._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._basic._400
      }
    }
    checkboxProps.backgroundColor = UIConfigurations.global.colors._basic
  } else if (props.success) {
    checkboxProps.style = {
      ...checkboxProps.style as any,
      ...{
        borderRadius: 2,
        borderColor: UIConfigurations.global.colors._success._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._success._400
      }
    }
    checkboxProps.backgroundColor = UIConfigurations.global.colors._success
  } else if (props.warning) {
    checkboxProps.style = {
      ...checkboxProps.style as any,
      ...{
        borderRadius: 2,
        borderColor: UIConfigurations.global.colors._warning._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._warning._400
      }
    }
    checkboxProps.backgroundColor = UIConfigurations.global.colors._warning
  } else if (props.danger) {
    checkboxProps.style = {
      ...checkboxProps.style as any,
      ...{
        borderRadius: 2,
        borderColor: UIConfigurations.global.colors._danger._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._danger._400
      }
    }
    checkboxProps.backgroundColor = UIConfigurations.global.colors._danger
  } else if (props.info) {
    checkboxProps.style = {
      ...checkboxProps.style as any,
      ...{
        borderRadius: 2,
        borderColor: UIConfigurations.global.colors._info._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._info._400
      }
    }
    checkboxProps.backgroundColor = UIConfigurations.global.colors._info
  }
  else {
    checkboxProps.style = {
      ...checkboxProps.style as any,
      ...{
        borderRadius: 2,
        borderColor: UIConfigurations.global.colors._primary._400,
        borderWidth: 1,
        backgroundColor: UIConfigurations.global.colors._primary._400
      }
    }
    checkboxProps.backgroundColor = UIConfigurations.global.colors._primary
  }



  if (props.style) {
    Object.assign(checkboxProps.style, props.style);
  }

  if (props.isLoading) {
    checkboxProps.type = CheckBoXType.LOADING;
  }

  if (props.width) {
    // Todo: Not fully compatible with stylesheet
    (checkboxProps.style as any).width = props.width;
  }


  // return checkboxProps;
  return <_CheckBox {...checkboxProps} />
};