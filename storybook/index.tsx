import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import * as React from "react";

import './rn-addons';
// import { Font } from 'expo';
import * as Font from 'expo-font'
import { Component } from 'react';
import { ConfigureUI } from './stories/config/config';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI

const StorybookUIRoot = getStorybookUI({
  isUIHidden: true,
  shouldPersistSelection:true,
});

export class RootComponent extends Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await ConfigureUI(Font);
    this.setState({ fontLoaded: true });
  }

  render = () => this.state.fontLoaded ? (<StorybookUIRoot {...this.props} {...this.state} />) : null
}


// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => RootComponent);

export default RootComponent;
