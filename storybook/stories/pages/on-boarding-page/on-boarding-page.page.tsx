import * as React from "react"
import { Column, Box, AnimatedBox, Row, Touchable } from "../../layout/layout"
import { UIConfigurations, Assets } from "../../config/config"
import { ifSmallerScreen, isSmallerScreen } from "../../../ui-helpers/is-smaller-screen"
import { ScreenHeight, ScreenWidth } from "../../../ui-helpers/screen-dimensions"
import { H2, H1, H3, H4, P } from "../../typography/typography"
import { ImageX } from "../../elements/image/image.element"
import { Linking, StyleSheet } from "react-native"
import { Icon } from "../../elements/icon/icon.element"
import Swiper from 'react-native-swiper';


export class OnBoardingPage extends React.PureComponent<OnBoardingPageProps & Partial<OnBoardingPageConnectedProps>, OnBoardingPageState>{

    static defaultProps = {

    }

    state = {

    }

    UIActions = {

    }

    action = {

    }

    listeners = {
        onSwiped: (index) => {

        }
    }

    render() {
        return (
            <Column fill space-around>
                {/* Swipper */}
                <Swiper loop={false} activeDotColor={UIConfigurations.global.colors.primary} dotColor={UIConfigurations.global.colors.lighter} height={ifSmallerScreen(ScreenHeight - 150, ScreenHeight - 240)} dotStyle={styles.dotStyle as any} activeDotStyle={styles.activeDotStyle as any} onIndexChanged={((index) => { this.listeners.onSwiped(index) })} autoplay autoplayTimeout={3} autoplayDirection>

                    {/* Introduction */}
                    <Box fill center middle>
                        <Box center >
                            <H2 align-center light>{"Your Social Media\nMarketing Assistant"}</H2>
                            <AnimatedBox animation="pulse" easing={'ease'} duration={1000} iterationCount={'infinite'}>
                                <Row padded-top-5xl>
                                    <ImageX source={Assets.app.logo_new} width={35} />
                                    <H1 primary> alakazam</H1>
                                </Row>
                            </AnimatedBox>
                        </Box>
                        <Box center middle absolute bottom={isSmallerScreen ? 50 : 120}>
                            <H3 light-colored>Swipe to see how</H3>
                        </Box>
                    </Box>


                    {/* Scheduling */}
                    <Box fill center middle>
                        <H2 align-center padded-bottom-5xl>Imagine Captions Easily</H2>
                        <ImageX source={Assets.app.icon_app} width={100} height={100} />
                        <H4 align-center light-colored padded-top-5xl>{"You can find inspiration for captions\nbased on the content you upload from our\nrich caption library."}</H4>
                    </Box>

                    {/* Repost */}
                    <Box fill center middle>
                        <H2 align-center padded-bottom-5xl>Find Best Hashtags Automatically</H2>
                        <ImageX source={Assets.app.icon_app} width={100} height={100} />
                        <H4 align-center light-colored padded-top-5xl>{"We will suggest the best hashtags for your\ncontent. You can further find advance\nhashtags to use to ace your Social\nMarketing"}</H4>
                    </Box>

                    {/* Hashtags */}
                    <Box fill center middle>
                        <H2 align-center padded-bottom-5xl>Schedule and never forget to Post</H2>
                        <ImageX source={Assets.app.icon_app} width={100} height={100} />
                        <H4 align-center light-colored padded-top-5xl>{"Once your post is prepared, you can\nschedule it to Instagram and Facebook."}</H4>
                    </Box>

                    {/* Captions */}
                    <Box fill center middle>
                        <H2 align-center padded-bottom-5xl>Repost just got Beautiful</H2>
                        <ImageX source={Assets.app.icon_app} width={100} height={100} />
                        <H4 align-center light-colored padded-top-5xl>{"We show you the available reposts for\nyour Instagram account and also support\na Branded Repost Frame to keep your\nPosts consistent."}</H4>
                    </Box>

                    {/* Special Days */}
                    <Box fill center middle>
                        <H2 align-center padded-bottom-5xl>Get to know Special days</H2>
                        <ImageX source={Assets.app.icon_app} width={100} height={100} />
                        <H4 align-center light-colored padded-top-5xl>{"Do you know the World Ice Cream Day is\non 21st July. Find the perfect special day\nto market your business"}</H4>
                    </Box>

                </Swiper>

                <P align-center size={13} primary>By Tapping the button below, you agree with our</P>
                <Row center paddingBottom={10}>
                    <Touchable track={'Pressed Terms of Use in OnBoarding'} onPress={() => Linking.openURL('https://alakazam.ai/terms-of-use')}>
                        <P size={13} light style={{ textDecorationLine: "underline" }}>Terms </P>
                    </Touchable>
                    <P primary size={13}>and</P>
                    <Touchable track={'Pressed Privacy Policy in OnBoarding'} onPress={() => Linking.openURL('https://alakazam.ai/privacy-policy')}>
                        <P size={13} light style={{ textDecorationLine: "underline" }}> Privacy Policy</P>
                    </Touchable>
                </Row>

                {/* Bottom Bar */}
                <Column center middle margin-bottom-xl>

                    {/* <H1 padded>🚀</H1> */}
                    <Touchable track="Login with Facebook">
                        <Row padded borderRadius={20} background={'#4267B2'} width={ScreenWidth - 50} padded-left height={50}>
                            <Column>
                                <Icon name={'logo-facebook'} color={'#FFF'} />
                            </Column>
                            <Column>
                                <Box padded-left>
                                    <P size={ifSmallerScreen(16, 18)} style={{ color: '#fff' }}>Login with Facebook</P>
                                </Box>
                            </Column>
                        </Row>
                    </Touchable>
                    <H3 light-colored padded>or</H3>
                    <Touchable track="Continue without Signing Up">
                        <Row padded borderRadius={20} background={UIConfigurations.global.colors.primary} width={ScreenWidth - 50} height={50}>
                            <Row padded-left>
                                <P size={ifSmallerScreen(16, 18)} style={{ color: '#fff' }} padded-right-xxl>Continue without Signing Up</P>
                                <Icon name="ios-arrow-forward" color="white" size={18} />
                            </Row>
                        </Row>
                    </Touchable>
                    {/* <ButtonX label="Get Started" large-x onPress={this.props.onGetStarted} /> */}

                    {/* <ButtonX secondary labeled icon={'logo-facebook'} label="Sign In"  large onPress={this.props.onSignIn} /> */}


                </Column>
            </Column>
        )
    }

}

export interface OnBoardingPageProps {
}

export interface OnBoardingPageState {

}

export interface OnBoardingPageConnectedProps {

}


const styles = StyleSheet.create({
    dotStyle: { width: 14, height: 14, borderRadius: 7, marginLeft: 5, marginRight: 5 },
    activeDotStyle: { width: 14, height: 14, borderRadius: 7, marginLeft: 5, marginRight: 5 }
})