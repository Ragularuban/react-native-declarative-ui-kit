import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { LottieAnimation } from "../../elements/lottie-animation/lottie-animation.element";
import { Assets } from "../../config/config";
import { LoaderAnimation } from "../../../../assets/lottie-animations/loader";
import { CheckAnimation } from "../../../../assets/lottie-animations/check-animation";


export class LottieAnimationsPage extends React.PureComponent<LottieAnimationsPageProps & Partial<LottieAnimationsPageConnectedProps>, LottieAnimationsPageState>{

    static defaultProps = {

    }

    state = {

    }

    UIActions = {

    }

    action = {

    }

    render() {

        const pageHeaderProps = {
            onBackPressed: this.props.goBack,
            previousScreen: "Back",
            title: "Lottie Animations Page"
        };
        return (
            <Column fill>
                <Scrollable stickyHeaderIndices={[0]}>
                    <Widget no-margin padded-xxl>
                        <H1>Lottie Animations Examples</H1>
                    </Widget>

                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <Box>
                            <LottieAnimation width={200} height={200} source={LoaderAnimation}></LottieAnimation>
                        </Box>
                    </Widget>

                    {/* Simple Textbox */}
                    <Widget padded-xxl>
                        <Box>
                            <LottieAnimation width={200} height={200} source={CheckAnimation}></LottieAnimation>
                        </Box>
                    </Widget>
                </Scrollable>
            </Column>
        )
    }

}

export interface LottieAnimationsPageProps {
    goBack: () => any
}

export interface LottieAnimationsPageState {

}

export interface LottieAnimationsPageConnectedProps {

}
