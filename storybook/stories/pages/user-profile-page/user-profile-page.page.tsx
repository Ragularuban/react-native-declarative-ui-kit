import * as React from "react"
import { Column, Row, Scrollable, Box, Touchable } from "../../layout/layout"
import { Widget } from "../../elements/card/card.element"
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions"
import { H1, P, H3, H4 } from "../../typography/typography"
import { UIConfigurations, Assets } from "../../config/config"
import { ImageX } from "../../elements/image/image.element"
import { Icon } from "../../elements/icon/icon.element"
import { ButtonX } from "../../elements/button/button.element"
import { ifSmallerScreen } from "../../../ui-helpers/is-smaller-screen"
import { TabView, SceneMap } from "react-native-tab-view"
import { BasicScrollableTabBar } from "../../elements/tab-bar/tab-bar.element"
import { TopHeader } from "../../collections/top-header/top-header.component"



export class UserProfilePage extends React.PureComponent<UserProfilePageProps & Partial<UserProfilePageConnectedProps>, UserProfilePageState>{

    static defaultProps = {

    }

    state = {
        index: 0,
        routes: [
            { key: 'activity', title: 'Activity' },
            { key: 'account', title: 'Account' },
        ],
    }

    UIActions = {

    }

    action = {

    }

    renderFunctions = {
        activity: () => {
            return (
                <Column fill>
                    <Row>
                        <Widget center middle width={(ScreenWidth - 80) / 2} padded-vertical-l style={{ borderRadius: 0 }}>
                            <H1>10</H1>
                            <P align-center light-colored>Total Number of items planned</P>
                        </Widget>
                        <Widget center middle width={(ScreenWidth - 80) / 2} padded-vertical-l>
                            <H1>11</H1>
                            <P align-center light-colored>Total Number of items Auto-Posted</P>
                        </Widget>
                    </Row>
                    <Row>
                        <Widget center middle width={(ScreenWidth - 80) / 2} padded-vertical-l style={{ borderRadius: 0 }}>
                            <H1>12</H1>
                            <P align-center light-colored>Total Number of items posted</P>
                        </Widget>
                        <Widget center middle width={(ScreenWidth - 80) / 2} padded-vertical-l>
                            <H1>13</H1>
                            <P align-center light-colored>Total Number of items Reposted</P>
                        </Widget>
                    </Row>
                </Column>
            );
        },
        account: () => {
            return (
                <Scrollable>

                    <Column fill>
                        {/* Linked Accounts */}
                        <Row flex_start padded-l>
                            <H3 light-colored regular>Linked Accounts</H3>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Box fill margin-left-l middle height={50} borderBottomWidth={1} borderColor={"#D8D8D8"}>
                                <P size={16}>XType</P>
                            </Box>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Row fill margin-left-l padded-right-l space-between middle height={50}>


                                <P size={16} color={'#FF6699'}>@Xtype</P>

                                {/* <P size={16} color={'#FF6699'}>{this.props.igUserName}</P> */}
                                <Touchable>
                                    <P primary size={16}>How to Unlink?</P>
                                </Touchable>
                            </Row>
                        </Row>



                        <Row flex_start padded-l>
                            <H3 light-colored regular>Purchase</H3>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>



                            <Row fill margin-left-l padded-right-l space-between middle height={50} >
                                <P size={16} primary>Alakazam Pro</P>
                                <P size={16} primary>Activated</P>
                            </Row>


                        </Row>

                        {/* <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.userProfile.restorepurchase} width={30} height={30} />
                            </Box>
                            <Row fill margin-left-l flex_start middle height={50}>
                                <P size={16}>Restore Purchase</P>
                            </Row>
                        </Row> */}

                        <Row flex_start padded-l>
                            <H3 light-colored regular>Profile</H3>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Row fill margin-left-l padded-right-l space-between middle height={50} borderBottomWidth={1} borderColor={"#D8D8D8"}>
                                <P size={16}>My Team</P>
                                <Row>
                                    <P light-colored>Coming Soon  </P>
                                    <Icon color={UIConfigurations.global.colors.light} small name={'ios-lock'} />
                                </Row>
                            </Row>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Row fill margin-left-l padded-right-l space-between middle height={50}>
                                <P size={16}>Activity Feed</P>
                                <Row>
                                    <P light-colored>Coming Soon  </P>
                                    <Icon color={UIConfigurations.global.colors.light} small name={'ios-lock'} />
                                </Row>
                            </Row>
                        </Row>

                        <Row flex_start padded-l>
                            <H3 light-colored regular>Help</H3>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Touchable fill>
                                <Row fill margin-left-l padded-right-l space-between middle height={50} borderBottomWidth={1} borderColor={"#D8D8D8"}>
                                    <P size={16}>FAQs</P>
                                    <Row>
                                        <Icon color={UIConfigurations.global.colors.light} small name={'ios-arrow-forward'} />
                                    </Row>
                                </Row>
                            </Touchable>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white} >
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Touchable fill>
                                <Row fill margin-left-l padded-right-l flex_start middle height={50} borderBottomWidth={1} borderColor={"#D8D8D8"}>
                                    <P size={16}>Report a Bug</P>
                                </Row>
                            </Touchable>

                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Row fill margin-left-l padded-right-l space-between middle height={50}>
                                <P size={16}>Get Support</P>
                                <Row>
                                    <P light-colored>Coming Soon  </P>
                                    <Icon color={UIConfigurations.global.colors.light} small name={'ios-lock'} />
                                </Row>
                            </Row>
                        </Row>

                        <Row flex_start padded-l>
                            <H3 light-colored regular>About</H3>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white}>
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Touchable fill>
                                <Row fill margin-left-l padded-right-l space-between middle height={50} borderBottomWidth={1} borderColor={"#D8D8D8"}>
                                    <P size={16}>Rate Us</P>
                                    <Row>
                                        <Icon color={UIConfigurations.global.colors.light} small name={'ios-arrow-forward'} />
                                    </Row>
                                </Row>
                            </Touchable>

                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white} >
                            <Box middle height={50}>
                                <ImageX source={Assets.app.icon_app} width={30} height={30} />
                            </Box>
                            <Touchable fill>
                                <Row fill margin-left-l padded-right-l space-between middle height={50} borderBottomWidth={1} borderColor={"#D8D8D8"}>
                                    <P size={16}>{"Follow Us for Tips & Tricks"}</P>
                                    <Row>
                                        <Icon color={UIConfigurations.global.colors.light} small name={'ios-arrow-forward'} />
                                    </Row>
                                </Row>
                            </Touchable>
                        </Row>

                        <Row padded-left-l flex_start background={UIConfigurations.global.colors.white} >
                            <Box middle height={50}>
                                <Icon color={'#e74c3c'} large-xx name={'ios-remove-circle'} />
                            </Box>
                            <Touchable fill>
                                <Row fill margin-left-l padded-right-l space-between middle height={50}>
                                    <P size={16}>{"Delete Current Account"}</P>
                                    <Row>
                                        <Icon color={UIConfigurations.global.colors.light} small name={'ios-arrow-forward'} />
                                    </Row>
                                </Row>
                            </Touchable>
                        </Row>

                        {/* <Widget padded-l flex_start no-bottom-margin width={ScreenWidth - 60}>
                        <Row>
                            <Icon name="md-link" small />
                            <P padded-left-xl>Linked Accounts</P>
                        </Row>
                        <Row flex_start padded-top-l padded-horizontal-l width={ScreenWidth - 60}>
                            <ImageX source={Assets.icons.icon_facebook_sqaure} width={ifSmallerScreen(10, 20)} />
                            <P light-colored padded-left-xl>{this.props.activeBusinessName}</P>
                        </Row>
                        <Row flex_start padded-top-l padded-horizontal-l width={ScreenWidth - 60}>
                            <ImageX source={Assets.icons.icon_instagram_blue} width={ifSmallerScreen(10, 20)} />
                           

                            {
                                !this.props.igUserName &&
                                <P padded-left-xl style={{ color: '#FF7900' }}>Not Connected</P>
                            }

                            {
                                this.props.igUserName &&
                                <P padded-left-xl style={{ color: UIConfigurations.global.colors.light }}>{this.props.igUserName}</P>
                            }

                        </Row>
                    </Widget> */}
                        {/* Notifications */}
                        {/* <Touchable onPress={this.props.navigate.toNotifications}>
                        <Widget row padded-l flex_start no-bottom-margin width={ScreenWidth - 60}>
                            <Icon name="md-notifications" small/>
                            <P padded-left-xl>Notifications</P>
                        </Widget>
                    </Touchable> */}
                        {/* Profile Access */}
                        {/* <Touchable onPress={this.props.navigate.toProfileAccess}>
                            <Widget row padded-l flex_start no-bottom-margin width={ScreenWidth - 60}>
                                <Icon name="ios-people" small />
                                <P padded-left-xl>Profile Access</P>
                            </Widget>
                        </Touchable> */}
                        {/* FAQ */}
                        {/* <Touchable onPress={this.props.navigate.toFavouriteAnswerQuestions}>
                            <Widget row padded-l flex_start no-bottom-margin width={ScreenWidth - 60}>
                                <Icon name="md-chatboxes" small />
                                <P padded-left-xl>FAQ</P>
                            </Widget>
                        </Touchable> */}
                        {/* Report a Bug */}
                        {/* <Touchable onPress={this.props.onReportBug}>
                            <Widget row padded-l flex_start no-bottom-margin width={ScreenWidth - 60}>
                                <Icon name="ios-bug" small />
                                <P padded-left-xl>Report a Bug</P>
                            </Widget>
                        </Touchable> */}

                        {/* Activity Feed */}
                        {/* <Touchable onPress={this.props.navigate.toActivityFeed}>
                            <Widget row padded-l flex_start no-bottom-margin width={ScreenWidth - 60}>
                                <Icon name="md-card" small />
                                <P padded-left-xl>Activity Feed</P>
                            </Widget>
                        </Touchable> */}

                        {/* About */}
                        {/* <Touchable onPress={()=>console.log('about pressed')}>
                        <Widget row padded-l flex_start width={ScreenWidth - 60}>
                            <Icon name="ios-information-circle" small/>
                            <P padded-left-xl>About</P>
                        </Widget>
                    </Touchable> */}

                        {/* App Version */}
                        <Box center middle padded-top padded-bottom-xl>
                            <P align-center light-colored>1.12.4v</P>
                        </Box>


                    </Column>
                </Scrollable>

            );
        }
    }

    listeners = {
        onTabIndexChange: index => this.setState({ index })
    }

    render() {

        const pageHeaderProps = {
            title: "",
            transparent: true,
            left:
                <Row width={100} top={-10}>
                    <Icon name={'ios-arrow-back'} small color={UIConfigurations.global.colors.light} />
                    <Box>
                        <P light-colored size={16}>   Dashboard</P>
                    </Box>
                </Row>,
            right: <ButtonX ghost label="Logout" labeled icon="ios-log-out" float-right
                style={{
                    right: -40,
                    width: 150,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: UIConfigurations.global.colors.primary
                }} />
        };
        return (
            <Column fill background={"#F6F6F6"}>
                {/* Page Header */}
                <Row space-between background={UIConfigurations.global.colors.white}>
                    <Column padded-top>
                        <TopHeader {...pageHeaderProps} />
                    </Column>

                </Row>


                <Box center background={UIConfigurations.global.colors.white}>
                    <ImageX source={Assets.misc.avatar} placeholder={Assets.misc.avatar} width={ifSmallerScreen(60, 100)} rounded />
                </Box>

                <Column center middle padded-vertical background={UIConfigurations.global.colors.white}>
                    <Touchable row center middle >
                        <H3 align-center padded-right-l light-colored>lool</H3>
                        <Icon name='ios-arrow-down' small grey />
                    </Touchable>
                </Column>

                <Box fill>
                    {/* <Scrollable fill> */}
                    <TabView
                        navigationState={this.state}
                        renderScene={SceneMap({
                            activity: () => this.renderFunctions.activity(),
                            account: () => this.renderFunctions.account(),
                        })}
                        onIndexChange={this.listeners.onTabIndexChange}
                        initialLayout={{ width: ScreenWidth }}
                        renderTabBar={BasicScrollableTabBar}
                    />
                    {/* </Scrollable> */}
                </Box>

            </Column>
        )
    }

}

export interface UserProfilePageProps {

}

export interface UserProfilePageState {

}

export interface UserProfilePageConnectedProps {

}
