
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { UIConfigurations } from '../../config/config';


export const BasicScrollableTabBar = props => (
    <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
    />)


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        height: 60
    },
    tab: {
        width: 120,
        height: 60
    },
    indicator: {
        backgroundColor: UIConfigurations.global.colors.primary,
    },
    label: {
        color: UIConfigurations.global.colors.dark,
        fontFamily: UIConfigurations.global.font.regular
    },
});