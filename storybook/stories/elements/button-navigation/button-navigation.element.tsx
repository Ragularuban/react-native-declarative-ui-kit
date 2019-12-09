import { ReactElement } from 'react';
import * as React from 'react';
import { TouchableOpacity, View, Text, ViewStyle, RegisteredStyle, ImageStyle, TextStyle, StyleSheet, TextInput, TextInputProps, TouchableWithoutFeedback, Vibration } from 'react-native';
import styled from 'styled-components/native';
import { Touchable, Box, AnimatedBox, Row } from '../../layout/layout';
import { Icon, IconName } from '../icon/icon.element';
import { H3, P } from '../../typography/typography';
import { UIConfigurations } from '../../config/config';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';
import { ifSmallerScreen } from '../../../ui-helpers/is-smaller-screen';


export class _ButtonNavigation extends React.PureComponent<ButtonNavigationX> {

  state = {
    tabAmount: 0,
    activeTab: 0
  }

  componentWillMount() {
    this.setState({ tabAmount: this.props.tabs.length });
  }

  actions = {
    setActiveTab: (index: number) => {
      this.setState({ activeTab: index });
      this.props.onChange(index);
    }
  }

  render() {
    switch (this.props.type) {
      case CheckBoXType.LOADING: {
        return (
          <LoadingIndicator />
        )
      }
      default: {


        return (
          <Row flex_start>
            {
              this.props.tabs.map((val, index) => {
                if (index == 0) {
                  return (
                    <Touchable onPress={() => this.actions.setActiveTab(index)} key={index}>
                      <Box style={{ ...this.props.style as any, ...{ opacity: this.state.activeTab == index ? 1 : 0.8, borderWidth: this.state.activeTab == index ? 1 : 0 } }} center middle borderTopLeftRadius={4} borderBottomLeftRadius={4}>
                        {
                          val.icon ? val.icon : (<P bold style={this.props.fontColor} >{val.title}</P>)
                        }
                      </Box>
                    </Touchable>
                  )
                } else if (index == (this.props.tabs.length - 1)) {
                  return (
                    <Touchable onPress={() => this.actions.setActiveTab(index)} key={index}>
                      <Box style={{ ...this.props.style as any, ...{ opacity: this.state.activeTab == index ? 1 : 0.8, borderWidth: this.state.activeTab == index ? 1 : 0 } }} center middle borderTopRightRadius={4} borderBottomRightRadius={4}>
                        {
                          val.icon ? val.icon : (<P bold style={this.props.fontColor} >{val.title}</P>)
                        }
                      </Box>
                    </Touchable>
                  )
                } else {
                  return (
                    <Touchable onPress={() => this.actions.setActiveTab(index)} key={index}>
                      <Box style={{
                        ...this.props.style as any, ...{
                          opacity: this.state.activeTab == index ? 1 : 0.8,
                          borderWidth: this.state.activeTab == index ? 1 : 0
                        }
                      }} center middle>
                        {
                          val.icon ? val.icon : (<P bold style={this.props.fontColor} >{val.title}</P>)
                        }
                      </Box>
                    </Touchable>
                  )
                }
              })
            }
          </Row>
        )
      }
    }
  }
}


interface ButtonNavigationX {
  // Button
  type?: CheckBoXType,
  style: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
  onChange?: (route: number) => any;
  track?: string,
  isLeftAligned?: boolean,
  placeholder?: string,
  RNativeProps?: TextInputProps,
  animate?: boolean,
  size?: CheckBoXSize,
  backgroundColor?: colorPallet
  iconLarge?: boolean,
  vibrate?: boolean,
  tabs?: { title: string }[] | { icon: JSX.Element }[],
  fontColor?: TextStyle | RegisteredStyle<TextStyle> | RegisteredStyle<TextStyle>[]
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


export const ButtonNavigationX = (props: {
  primary?: boolean,
  success?: boolean,
  dark?: boolean,
  warning?: boolean,
  danger?: boolean,
  info?: boolean,
  disabled?: boolean,
  isLoading?: boolean,
  style?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
  width?: number,
  tabs?: { title: string }[] | { icon: JSX.Element }[],
  small?: boolean,
  large?: boolean,
  onChange?: (route: number) => any
}) => {

  function def(val) {

  }


  let ButtonNavigationX: ButtonNavigationX = {
    style: {
      paddingHorizontal: props.small ? 11 : props.large ? 21 : 16,
      paddingVertical: props.small ? 5 : props.large ? 15 : 10,
    },
    tabs: props.tabs,
    fontColor: { color: UIConfigurations.global.colors.white, fontSize: props.small ? 11 : props.large ? 21 : 16 },
    onChange: props.onChange
  };

  if (props.primary) {
    ButtonNavigationX.style = {
      ...ButtonNavigationX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.primary,
        borderColor: UIConfigurations.global.colors._primary._900
      }
    }
  } else if (props.success) {
    ButtonNavigationX.style = {
      ...ButtonNavigationX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors._success._900,
        borderColor: UIConfigurations.global.colors._success._900
      }
    }
  } else if (props.warning) {
    ButtonNavigationX.style = {
      ...ButtonNavigationX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.warning,
        borderColor: UIConfigurations.global.colors._warning._900
      }
    }
  } else if (props.info) {
    ButtonNavigationX.style = {
      ...ButtonNavigationX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.success,
        borderColor: UIConfigurations.global.colors._info._900
      }
    }
  } else if (props.danger) {
    ButtonNavigationX.style = {
      ...ButtonNavigationX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.danger,
        borderColor: UIConfigurations.global.colors._danger._900
      }
    }
  } else {
    ButtonNavigationX.style = {
      ...ButtonNavigationX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.basic,
        borderColor: UIConfigurations.global.colors._basic._900
      }
    }
    ButtonNavigationX.fontColor = { ...ButtonNavigationX.fontColor as any, ...{ color: UIConfigurations.global.colors.white } }
  }



  if (props.style) {
    Object.assign(ButtonNavigationX.style, props.style);
  }

  if (props.isLoading) {
    ButtonNavigationX.type = CheckBoXType.LOADING;
  }

  if (props.width) {
    // Todo: Not fully compatible with stylesheet
    (ButtonNavigationX.style as any).width = props.width;
  }


  // return ButtonNavigationX;
  return <_ButtonNavigation {...ButtonNavigationX} />
};