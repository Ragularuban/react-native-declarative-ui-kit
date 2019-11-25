import * as React from 'react';
import { TabView, TabBar, SceneMap, PagerScroll, PagerExperimental } from 'react-native-tab-view';
import * as GestureHandler from 'react-native-gesture-handler';

export const UniversalTabPager = props => <PagerExperimental {...props} GestureHandler={GestureHandler} />