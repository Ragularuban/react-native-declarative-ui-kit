import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox, GradientBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { ImageX } from "../../elements/image/image.element";
import { UniversalTabPager } from "../../elements/tab-pager/tab-pager.element";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { BasicScrollableTabBar } from "../../elements/tab-bar/tab-bar.element";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { LinearGradient } from 'expo-linear-gradient';
import { WideMetricWidget } from "../../collections/wide-metric-widget/wide-metric-widget.collection";
import { GetProp } from "../../../ui-helpers/helpers";
import { LoadingIndicator } from "../../elements/loading-indicator/loading-indicator";
import { Assets } from "../../config/config";
import { ifSmallerScreen } from "../../../ui-helpers/is-smaller-screen";

import { Icon } from "../../elements/icon/icon.element";
import { TopHeader } from "../../collections/top-header/top-header.component";


export class AnalyticsPage extends React.PureComponent<AnalyticsPageProps & Partial<AnalyticsPageConnectedProps>, AnalyticsPageState>{

    static defaultProps = {

    }

    state = {
        index: 0,
        routes: [
            { key: 'instagram', title: 'Instagram' },
            { key: 'facebook', title: 'Facebook' },
        ],
    }

    UIActions = {

    }

    action = {

    }


    renderFunctions = {
        emptyBox: () => <Box />,
        instagram: () => {
            return (
                <Column fill>

                    {
                        this.props.weeklyInstagramAnalytics.isLoading &&
                        <Column fill center minHeight={300}>
                            <Box center>
                                <H3 primary>No Instagram is conneceted</H3>
                                <Box margin-top-xl>
                                    <ImageX source={Assets.app.icon_app} width={75} height={75} />
                                </Box>
                            </Box>

                        </Column>
                    }

                    {
                        GetProp(() => this.props.weeklyInstagramAnalytics.data, [])
                            .map(ele =>
                                <WideMetricWidget metric={ele.metric} total={ele.total} today={ele.today} pallet="red" key={ele.id} metricId={ele.id} />
                            )
                    }
                </Column>
            );
        },
        facebook: () => {
            return (
                <Column fill>
                    {
                        this.props.weeklyFacebookAnalytics.isLoading &&
                        <Column fill middle center minHeight={300}>
                            <LoadingIndicator />
                        </Column>
                    }
                    {
                        GetProp(() => this.props.weeklyFacebookAnalytics.data, [])
                            .map(ele =>
                                <WideMetricWidget metric={ele.metric} total={ele.total} today={ele.today} pallet="blue" key={ele.id} metricId={ele.id} />
                            )
                    }
                </Column>
            );
        }
    }

    listeners = {
        onTabIndexChange: index => this.setState({ index })
    }

    render() {

        return (
            <Column fill>
                {/* Header */}
                <Widget no-margin>
                    <Column absolute zIndex={1}>
                        <TopHeader
                            transparent
                            left={<Touchable track={'Pressed Back on Analytics Page'}><Icon name={'ios-arrow-back'} large /></Touchable>}
                        />
                        {/* <PageHeader {...pageHeaderProps} /> */}
                    </Column>
                    <Row flex_end middle>
                        <ImageX width={ifSmallerScreen(150, 200)} source={Assets.app.icon_app} />
                    </Row>
                    {/* <Row>
                        <TabView
                            navigationState={this.state}
                            // scrollEnabled={true}
                            renderScene={SceneMap({
                                instagram: this.renderFunctions.emptyBox,
                                facebook: this.renderFunctions.emptyBox,
                            })}
                            renderTabBar={BasicScrollableTabBar}
                            renderPager={UniversalTabPager}
                            onIndexChange={this.listeners.onTabIndexChange}
                            initialLayout={{ width: ScreenWidth, height: 0 }}
                        />
                    </Row> */}
                </Widget>
                <Box margin-top-xl fill>
                    <Scrollable>
                        {/* <TabView
                            navigationState={this.state}
                            // scrollEnabled={true}
                            renderScene={SceneMap({
                                instagram: () => this.renderFunctions.instagram(),
                                facebook: () => this.renderFunctions.facebook(),
                            })}
                            renderTabBar={this.renderFunctions.emptyBox}
                            renderPager={UniversalTabPager}
                            onIndexChange={this.listeners.onTabIndexChange}
                            initialLayout={{ width: ScreenWidth, height: 0 }}
                        /> */}
                    </Scrollable>
                </Box>
            </Column>
        )
    }

}

export interface AnalyticsPageProps {

}

export interface AnalyticsPageState {

}

export interface AnalyticsPageConnectedProps {
    weeklyFacebookAnalytics: {
        isLoading: boolean,
        data: {
            id: string,
            metric: string,
            total: number,
            today: number
        }[]
    },
    weeklyInstagramAnalytics: {
        isLoading: boolean,
        data: {
            id: string,
            metric: string,
            total: number,
            today: number
        }[]
    },
}
