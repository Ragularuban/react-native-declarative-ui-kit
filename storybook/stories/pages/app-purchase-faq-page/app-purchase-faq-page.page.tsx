import * as React from "react"
import { Box, Touchable, Row } from "../../layout/layout"
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions"
import { H2, P } from "../../typography/typography"
import { Icon } from "../../elements/icon/icon.element"
import { UIConfigurations } from "../../config/config"
import Collapsible from 'react-native-collapsible';
import { ButtonX } from "../../elements/button/button.element"


export class AppPurchaseFaqPage extends React.PureComponent<AppPurchaseFaqPageProps & Partial<AppPurchaseFaqPageConnectedProps>, AppPurchaseFaqPageState>{

    static defaultProps = {

    }

    state = {
        collapsibleOne: true,
        collapsibleTwo: true,
        collapsibleThree: true,
        collapsibleFour: true,
        collapsibleFive: true,
    }

    UIActions = {
        collapsibleOne: {
            show: () => {
                this.setState({ collapsibleOne: false })
            },
            hide: () => {
                this.setState({ collapsibleOne: true })
            },
            toggle: () => {
                this.state.collapsibleOne ? this.setState({ collapsibleOne: false }) : this.setState({ collapsibleOne: true })
            }
        },
        collapsibleTwo: {
            show: () => {
                this.setState({ collapsibleTwo: false })
            },
            hide: () => {
                this.setState({ collapsibleTwo: true })
            },
            toggle: () => {
                this.state.collapsibleTwo ? this.setState({ collapsibleTwo: false }) : this.setState({ collapsibleTwo: true })
            }
        },
        collapsibleThree: {
            show: () => {
                this.setState({ collapsibleThree: false })
            },
            hide: () => {
                this.setState({ collapsibleThree: true })
            },
            toggle: () => {
                this.state.collapsibleThree ? this.setState({ collapsibleThree: false }) : this.setState({ collapsibleThree: true })
            }
        },
        collapsibleFour: {
            show: () => {
                this.setState({ collapsibleFour: false })
            },
            hide: () => {
                this.setState({ collapsibleFour: true })
            },
            toggle: () => {
                this.state.collapsibleFour ? this.setState({ collapsibleFour: false }) : this.setState({ collapsibleFour: true })
            }
        },
        collapsibleFive: {
            show: () => {
                this.setState({ collapsibleFive: false })
            },
            hide: () => {
                this.setState({ collapsibleFive: true })
            },
            toggle: () => {
                this.state.collapsibleFive ? this.setState({ collapsibleFive: false }) : this.setState({ collapsibleFive: true })
            }
        }
    }

    action = {

    }

    render() {

        return (
            <Box fill page white-bg>
                <Box absolute top={0} width={ScreenWidth} height={100} background={'#FF0166'} center middle>
                    <Box paddingTop={30}>
                        <H2 white-colored>FAQs</H2>
                    </Box>
                    <Box absolute right={20} top={48}>
                        <Touchable>
                            <Icon name={"ios-close-circle"} large white />
                        </Touchable>
                    </Box>
                </Box>
                <Box marginTop={120} paddingHorizontal={15}>
                    <Box borderWidth={1} borderRadius={20} borderColor={this.state.collapsibleOne ? UIConfigurations.global.colors.lighter : UIConfigurations.global.colors.primary} padding={10}>
                        <Touchable onPress={this.UIActions.collapsibleOne.toggle}>
                            <Row space-between>
                                <P primary>What Benefits do i get with Pro?</P>
                                <Icon name={this.state.collapsibleOne ? "ios-arrow-down" : "ios-arrow-up"} primary />
                            </Row>
                        </Touchable>
                        <Collapsible collapsed={this.state.collapsibleOne}>
                            <P>With our Pro version, you'd be getting access to our content calendar. Content Calendar allows you to plan posts ahead.</P>
                        </Collapsible>
                    </Box>
                </Box>
                <Box marginTop={10} paddingHorizontal={15}>
                    <Box borderWidth={1} borderRadius={20} borderColor={this.state.collapsibleTwo ? UIConfigurations.global.colors.lighter : UIConfigurations.global.colors.primary} padding={10}>
                        <Touchable onPress={this.UIActions.collapsibleTwo.toggle}>
                            <Row space-between>
                                <P primary>What is the subscription fee for Pro?</P>
                                <Icon name={this.state.collapsibleTwo ? "ios-arrow-down" : "ios-arrow-up"} primary />
                            </Row>
                        </Touchable>
                        <Collapsible collapsed={this.state.collapsibleTwo}>
                            <P>Our subscription fee for pro is 19.99 per month. For limited time - this pricing will be available for all your business profiles connected.</P>
                        </Collapsible>
                    </Box>
                </Box>
                <Box marginTop={10} paddingHorizontal={15}>
                    <Box borderWidth={1} borderRadius={20} borderColor={this.state.collapsibleThree ? UIConfigurations.global.colors.lighter : UIConfigurations.global.colors.primary} padding={10}>
                        <Touchable onPress={this.UIActions.collapsibleThree.toggle}>
                            <Row space-between>
                                <P primary>Can i cancel my subscription anytime?</P>
                                <Icon name={this.state.collapsibleThree ? "ios-arrow-down" : "ios-arrow-up"} primary />
                            </Row>
                        </Touchable>
                        <Collapsible collapsed={this.state.collapsibleThree}>
                            <P>Yes, you can cancel your subscription anytime in which you'd loose access to your content calendar from the next billing month onwards.</P>
                        </Collapsible>
                    </Box>
                </Box>
                <Box marginTop={10} paddingHorizontal={15}>
                    <Box borderWidth={1} borderRadius={20} borderColor={this.state.collapsibleFour ? UIConfigurations.global.colors.lighter : UIConfigurations.global.colors.primary} padding={10}>
                        <Touchable onPress={this.UIActions.collapsibleFour.toggle}>
                            <Row space-between>
                                <P primary>Can i pay annually?</P>
                                <Icon name={this.state.collapsibleFour ? "ios-arrow-down" : "ios-arrow-up"} primary />
                            </Row>
                        </Touchable>
                        <Collapsible collapsed={this.state.collapsibleFour}>
                            <P>At the moment you cannot pay annually. We are working on to add this feature into our product.</P>
                        </Collapsible>
                    </Box>
                </Box>
                <Box marginTop={10} paddingHorizontal={15}>
                    <Box borderWidth={1} borderRadius={20} borderColor={this.state.collapsibleFive ? UIConfigurations.global.colors.lighter : UIConfigurations.global.colors.primary} padding={10}>
                        <Touchable onPress={this.UIActions.collapsibleFive.toggle}>
                            <Row space-between>
                                <P primary>How do I get access to support?</P>
                                <Icon name={this.state.collapsibleFive ? "ios-arrow-down" : "ios-arrow-up"} primary />
                            </Row>
                        </Touchable>
                        <Collapsible collapsed={this.state.collapsibleFive}>
                            <P>Support is available through our website and there is a live chat support option.</P>
                        </Collapsible>
                    </Box>
                </Box>
                <Box absolute bottom={30} center middle width={ScreenWidth}>
                    <ButtonX primary label={'Sign Up'} large rounded outlined />
                </Box>
            </Box >
        )
    }

}

export interface AppPurchaseFaqPageProps {
}

export interface AppPurchaseFaqPageState {

}

export interface AppPurchaseFaqPageConnectedProps {

}
