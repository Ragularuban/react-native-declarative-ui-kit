import * as React from "react";
import { Column, Scrollable, Box } from "../../layout/layout";
import { Widget } from "../../elements/card/card.element";
import { H1, P } from "../../typography/typography";
import { CheckBoX } from "../../elements/check-box/check-box.element";
import { RadioButton } from "../../elements/radio-button/radio-button.element";
import Slider from "../../elements/slider/slider.element";
import { SwitchX } from "../../elements/switch/switch.element";
import { BasicScrollableTabBar } from "../../elements/tab-bar/tab-bar.element";
import { BasicScrollableTabBarV2 } from "../../elements/tab-bar/tab-barV2.element";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { View, Dimensions, StyleSheet } from "react-native";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { Icon } from "../../elements/icon/icon.element";
import { TabViewX } from "../../elements/tab-view/tabViewX.element";




export class TabXPage extends React.PureComponent<TabXPageProps & Partial<TabXPageConnectedProps>, TabXPageState>{


    UIActions = {

    }

    action = {

    }

    render() {


        return (
            <Column fill page white-bg>
                <Scrollable stickyHeaderIndices={[0]}>

                    <H1>Tab View</H1>

                    {/* Header */}
                    <Widget padded-xxl>
                        <TabViewX />
                    </Widget>

                </Scrollable>
            </Column >
        )
    }

}

export interface TabXPageProps {
    goBack?: () => any
}

export interface TabXPageState {

}

export interface TabXPageConnectedProps {

}
