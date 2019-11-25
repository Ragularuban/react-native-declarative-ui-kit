import styled from 'styled-components/native';
import { getLayout, LayoutProps, AnimationType, getSpecialProperties } from './layout.helpers';
import { ViewStyle, TouchableOpacityProperties, ScrollViewProperties, ViewProps, StyleSheet } from 'react-native';
import transform from 'css-to-react-native';
import * as Animatable from 'react-native-animatable';
import * as React from 'react';
import { Easing } from 'react-native-animatable';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { LinearGradient } from 'expo-linear-gradient';
import { UIConfigurations } from '../config/config';
import * as Haptic from 'expo-haptics';
import { ActionContext } from '../../ui-helpers/actions-context';

// Column View
export const Column: (props: LayoutProps | ViewStyle | ViewProps) => JSX.Element = styled.View`
  flex-direction: column;
  ${props => getLayout(props, false)};
  ${props => getSpecialProperties(props)};
`;

// Row View
export const Row: (props: LayoutProps | ViewStyle | ViewProps) => JSX.Element = styled.View`
  flex-direction: row;
  ${props => getLayout(props, true)}
  ${props => getSpecialProperties(props)};
`;

// Box View
export const Box: (props: LayoutProps | ViewStyle | ViewProps) => JSX.Element = styled.View`
  flex-direction: ${props => props.flexDirection || 'column'};  
  ${props => getLayout(props, false)}
  ${props => getSpecialProperties(props)};
`;

// Touchable View
export const TouchableX: (props: LayoutProps & TouchableOpacityProperties | ViewStyle | ViewProps) => JSX.Element = styled.TouchableOpacity`
  ${props => getLayout(props, false)}
`;

export class Touchable extends React.PureComponent<LayoutProps & (TouchableOpacityProperties | ViewStyle | { delay?: string } | ViewProps) & { track?: string, dropNativeShadow?: boolean }> {


  static clicks = new Subject();

  static contextType = ActionContext;

  onPress = (...args) => {
    const onPress = (this.props as any).onPress;
    if ((this.props as any).track) {
      let context = this.context;
      Touchable.clicks.next((context ? `${context}->` : '') + (this.props as any).track);
    }
    // Haptic.selection();
    if (onPress) {
      onPress(...args);
    }
  }
  render() {
    // picking the styled properties from the props since styled.TouchableOpacity does not pick it
    const style = [this.props.dropNativeShadow ? styles.nativeCard : {}, this.props.style, { ..._.pick(this.props, 'borderRadius', 'width', 'height', 'top', 'left', 'right', 'bottom', 'backgroundColor') }];
    return (<TouchableX style={style} {..._.omit(this.props, 'onPress', 'style')} onPress={this.onPress} delayPressIn={!!((this.props as any).delay) ? (this.props as any).delay : 50}>{this.props.children}</TouchableX>);
  }
}

// Animated View
export const AnimatedBox = (props: {
  animation?: AnimationType,
  duration?: number,
  delay?: number,
  easing?: Easing,
  children?: JSX.Element | JSX.Element[]
  iterationCount?: any
} & LayoutProps) => (
    <Animatable.View {...props}>
      <Box {...props}>
        {props.children}
      </Box>
    </Animatable.View>
  );


// Scroll View
export const Scrollable: (props: Partial<ScrollViewProperties> & LayoutProps & { hideIndicator?: boolean }) => any = styled.ScrollView.attrs(props => {
  return {
    contentContainerStyle: transform(getLayout(props, false).split(';').filter(e => e.indexOf(':') > -1).map(e => e.split(':').map(e => e.trim()))),
    ...props,
    showsHorizontalScrollIndicator: !props.hideIndicator,
  };
})`

`;


export const GradientBox: (props: LayoutProps | ViewStyle | ViewProps | { pallet?: string }) => JSX.Element = styled(LinearGradient).attrs(props => {
  if (props.pallet) {
    return UIConfigurations.global.gradientPallet[props.pallet];
  }
  return UIConfigurations.global.gradientPallet.red;
})`
  ${props => getLayout(props, false)}
  ${props => getSpecialProperties(props)};
  overflow: hidden;
`;


const styles = StyleSheet.create({
  nativeCard: {
    flexDirection: 'column',
    shadowColor: '#d0d0d0',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 2,
    overflow: 'hidden'
  }
});