import { ReactElement } from 'react';
import * as React from 'react';
import { TouchableOpacity, View, Text, ViewStyle, RegisteredStyle, ImageStyle, TextStyle, StyleSheet, TextInput, TextInputProps, TouchableWithoutFeedback, Switch, Vibration, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Touchable, Box, AnimatedBox, Row } from '../../layout/layout';
import { Icon, IconName } from '../icon/icon.element';
import { H3, P } from '../../typography/typography';
import { UIConfigurations } from '../../config/config';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';
import { ifSmallerScreen } from '../../../ui-helpers/is-smaller-screen';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


export class _TabViewX extends React.PureComponent<tabViewXProps> {

  state = {
    index: 1, routes: [{ key: 'music', title: 'Music' }, { key: 'albums', title: 'Albums' }]
  }





  render() {
    switch (this.props.type) {
      case TabViewType.LOADING: {
        return (
          <LoadingIndicator />
        )
      }
      // dev this if needed
      // case TabViewType.ICON: {
      //   let style = { ...this.props.style as any, ...{ backgroundColor: this.state.SwitchXToggle ? this.props.backgroundColor._400 : this.props.backgroundColor._200 } }
      //   return (
      //     <Row flex_start>
      //       <TouchableWithoutFeedback onPress={this.UIActions.SwitchXToggle}>
      //         <View>
      //           <Box style={style} center middle>
      //             {
      //               this.state.SwitchXToggle &&
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
        return (
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              music: () => (
                <View >
                  <P>lol</P>
                </View>
              ),
              albums: () => (
                <View >
                  <P>lol2</P>
                </View>
              )
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={props =>
              <TabBar
                {...props}
                renderIcon={({ route, focused, color }) => (
                  route.key == 'first' ? <Icon
                    name={'ios-alarm'}
                    color={color}
                  /> :
                    <Icon
                      name={'ios-airplane'}
                      color={color}
                    />
                )}
                renderLabel={null}
              />
            }
            tabBarPosition={'top'}
          />
        )
      }
    }
  }
}


interface tabViewXProps {
  // Button
  type: TabViewType,
  style: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
  onChange?: (toggle: boolean) => any;
  track?: string,
  isLeftAligned?: boolean,
  placeholder?: string,
  RNativeProps?: TextInputProps,
  animate?: boolean,
  size?: SwitchXSize,
  backgroundColor?: colorPallet
  iconLarge?: boolean,
  vibrate?: boolean
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

export enum SwitchXFloat {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

export enum SwitchXSize {
  NORMAL = "NORMAL",
  SMALL = "SMALL"
}

export enum SwitchXColor {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  WHITE = "WHITE",
  GREY = "GREY"
}

export enum TabViewType {
  BASIC = "BASIC",
  LABELED = "LABELED",
  ICON = "ICON",
  LOADING = "LOADING"
}


export const TabViewX = (props: {
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
  onChange?: (toggle: boolean) => any,
  style?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[],
  track?: string,
  width?: number,
  placeholder?: string,
  animate?: boolean,
  vibrate?: boolean
}) => {

  function def(val) {

  }

  let tabViewXProps: tabViewXProps = {
    // TextInput
    animate: props.animate,
    placeholder: props.placeholder,
    size: SwitchXSize.SMALL,
    type: props.labeled ? TabViewType.ICON : null,
    style: {
      borderWidth: 1,
      opacity: 1
    },
    onChange: props.onChange ? props.onChange : def,
    vibrate: props.vibrate
  };

  if (props.primary) {
    tabViewXProps.style = {
      ...tabViewXProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._primary._400,
      }
    }
    tabViewXProps.backgroundColor = UIConfigurations.global.colors._primary
  } else if (props.success) {
    tabViewXProps.style = {
      ...tabViewXProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._success._400,
      }
    }
    tabViewXProps.backgroundColor = UIConfigurations.global.colors._success
  } else if (props.warning) {
    tabViewXProps.style = {
      ...tabViewXProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._warning._400,
      }
    }
    tabViewXProps.backgroundColor = UIConfigurations.global.colors._warning
  } else if (props.danger) {
    tabViewXProps.style = {
      ...tabViewXProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._danger._400,
      }
    }
    tabViewXProps.backgroundColor = UIConfigurations.global.colors._danger
  } else if (props.info) {
    tabViewXProps.style = {
      ...tabViewXProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._info._400,
      }
    }
    tabViewXProps.backgroundColor = UIConfigurations.global.colors._info
  } else {
    tabViewXProps.style = {
      ...tabViewXProps.style as any,
      ...{
        borderColor: UIConfigurations.global.colors._basic._400
      }
    }
    tabViewXProps.backgroundColor = UIConfigurations.global.colors._basic
  }





  if (props.style) {
    Object.assign(tabViewXProps.style, props.style);
  }

  if (props.isLoading) {
    tabViewXProps.type = TabViewType.LOADING;
  }

  if (props.width) {
    // Todo: Not fully compatible with stylesheet
    (tabViewXProps.style as any).width = props.width;
  }


  // return tabViewXProps;
  return <_TabViewX {...tabViewXProps} />
};