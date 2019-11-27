import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../layout/layout";

import { H1 } from "../typography/typography";
import { View, ScrollView, Picker } from "react-native";
import { OnBoardingPagePlayground } from "./on-boarding-page/on-boarding-page.playground";
import { TypographyPagePlayground } from "./typography-page/typography-page.playground";
import { LayoutPagePlayground } from "./layout-page/layout-page.playground";
import { ButtonsPagePlayground } from "./buttons-page/buttons-page.playground";
import { ProgressBarsPagePlayground } from "./progress-bars-page/progress-bars-page.playground";
import { InputsPagePlayground } from "./inputs-page/inputs-page.playground";
import { LottieAnimationsPagePlayground } from "./lottie-animations-page/lottie-animations-page.playground";
import { IconsPagePlayground } from "./icons-page/icons-page.playground";
import { TagColorSelector } from "../collections/tag-color-selector/tag-color-selector.collection";
import { WelcomePagePlayground } from "./welcome-page/welcome-page";
import { ColorProfilePagePlayground } from "./color-profiles-page/color-profile";


export class PlaygroundView extends Component<PlaygroundViewProps, PlaygroundViewState>{
  componentDidMount() { }

  render() {
    return (
      <Column fill>
        <WelcomePagePlayground />
        {/* <ColorProfilePagePlayground /> */}
        {/* <TypographyPagePlayground /> */}
        {/* <LayoutPagePlayground /> */}
        {/* <ButtonsPagePlayground /> */}
        {/* <ProgressBarsPagePlayground /> */}
        {/* <InputsPagePlayground /> */}
        {/* <LottieAnimationsPagePlayground /> */}
        {/* <IconsPagePlayground /> */}

      </Column>
    )
  }
}


export interface PlaygroundViewProps {

}

export interface PlaygroundViewState {

}
