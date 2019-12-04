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


const FirstRoute = () => (
    <View  >

    </View>
);

const SecondRoute = () => (
    <View  >

    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});

export class SwitchXPage extends React.PureComponent<SwitchXPageProps & Partial<SwitchXPageConnectedProps>, SwitchXPageState>{

    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
        ],
    };

    UIActions = {

    }

    action = {

    }

    render() {


        return (
            <Column fill page white-bg>
                <Scrollable stickyHeaderIndices={[0]}>

                    {/* Header */}
                    <Widget padded-xxl>
                        <H1>Switch Examples</H1>
                    </Widget>

                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <P>Vibration OFF</P>
                        <SwitchX primary />
                    </Widget>

                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <P>Vibration ON</P>
                        <SwitchX vibrate />
                    </Widget>
                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <P>Vibration ON</P>
                        <SwitchX vibrate warning />
                    </Widget>
                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <P>Vibration ON</P>
                        <SwitchX vibrate info />
                    </Widget>
                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <P>Vibration ON</P>
                        <SwitchX vibrate success />
                    </Widget>
                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <P>Vibration ON</P>
                        <SwitchX vibrate danger />
                    </Widget>





                </Scrollable>
            </Column >
        )
    }

}

export interface SwitchXPageProps {
    goBack?: () => any
}

export interface SwitchXPageState {

}

export interface SwitchXPageConnectedProps {

}
