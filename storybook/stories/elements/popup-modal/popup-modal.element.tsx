import { ReactElement } from 'react';
import * as React from 'react';
import { TouchableOpacity, View, Text, ViewStyle, RegisteredStyle, ImageStyle, TextStyle, StyleSheet, TextInput, TextInputProps, TouchableWithoutFeedback, Vibration } from 'react-native';
import styled from 'styled-components/native';
import { Touchable, Box, AnimatedBox, Row, Column } from '../../layout/layout';
import { Icon, IconName } from '../icon/icon.element';
import { H3, P, H1, H4 } from '../../typography/typography';
import { UIConfigurations, Assets } from '../../config/config';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';
import { ifSmallerScreen } from '../../../ui-helpers/is-smaller-screen';
import Modal from 'react-native-modal';
import { ScreenWidth, ScreenHeight } from '../../../ui-helpers/screen-dimensions';
import { ImageX } from '../image/image.element';
import { ButtonX } from '../button/button.element';


export class _PopUpModal extends React.PureComponent<PopUpModalX> {



  render() {
    switch (this.props.type) {
      case CheckBoXType.LOADING: {
        return (
          <LoadingIndicator />
        )
      }
      default: {

        return (
          <Modal isVisible={this.props.isVisible} >
            <Column borderRadius={20} background={'white'} width={ScreenWidth - 40} padded-vertical-3xl padded-horizontal-3xl height={ScreenHeight - (ScreenHeight / 2)} space-between>
              {
                this.props.onClose != null &&
                <Box absolute right={10} top={8}>
                  <Touchable onPress={this.props.onClose}>
                    <Icon name={'ios-close-circle'} />
                  </Touchable>
                </Box>
              }
              {this.props.top}
              {this.props.center}
              {this.props.bottom}
            </Column>
          </Modal>
        )
      }
    }
  }
}


interface PopUpModalX {
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
  fontColor?: TextStyle | RegisteredStyle<TextStyle> | RegisteredStyle<TextStyle>[],
  isVisible?: boolean,
  top?: JSX.Element,
  center?: JSX.Element,
  bottom?: JSX.Element,
  onClose?: () => any
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


export const PopUpModalX = (props: {
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
  onChange?: (route: number) => any,
  isVisible?: boolean,
  top?: JSX.Element,
  center?: JSX.Element,
  bottom?: JSX.Element,
  onClose?: () => any
}) => {



  let PopUpModalX: PopUpModalX = {
    style: {
    },
    isVisible: props.isVisible,
    onChange: props.onChange,
    top: props.top,
    center: props.center,
    bottom: props.bottom,
    onClose: props.onClose ? props.onClose : null,
  };

  if (props.primary) {
    PopUpModalX.style = {
      ...PopUpModalX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.primary,
        borderColor: UIConfigurations.global.colors._primary._600
      }
    }
  } else if (props.success) {
    PopUpModalX.style = {
      ...PopUpModalX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.success,
        borderColor: UIConfigurations.global.colors._success._600
      }
    }
  } else if (props.warning) {
    PopUpModalX.style = {
      ...PopUpModalX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.warning,
        borderColor: UIConfigurations.global.colors._warning._600
      }
    }
  } else if (props.info) {
    PopUpModalX.style = {
      ...PopUpModalX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.success,
        borderColor: UIConfigurations.global.colors._info._600
      }
    }
  } else if (props.danger) {
    PopUpModalX.style = {
      ...PopUpModalX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.danger,
        borderColor: UIConfigurations.global.colors._danger._600
      }
    }
  } else {
    PopUpModalX.style = {
      ...PopUpModalX.style as any,
      ...{
        backgroundColor: UIConfigurations.global.colors.basic,
        borderColor: UIConfigurations.global.colors._basic._600
      }
    }
    PopUpModalX.fontColor = { ...PopUpModalX.fontColor as any, ...{ color: UIConfigurations.global.colors.white } }
  }



  if (props.style) {
    Object.assign(PopUpModalX.style, props.style);
  }

  if (props.isLoading) {
    PopUpModalX.type = CheckBoXType.LOADING;
  }

  if (props.width) {
    // Todo: Not fully compatible with stylesheet
    (PopUpModalX.style as any).width = props.width;
  }


  // return PopUpModalX;
  return <_PopUpModal {...PopUpModalX} />
};