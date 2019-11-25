import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box, GradientBox, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { Icon } from "../../elements/icon/icon.element";
import { ifSmallerScreen } from "../../../ui-helpers/is-smaller-screen";
import { Assets, UIConfigurations } from "../../config/config";
import { ImageX } from "../../elements/image/image.element";
import { LockedPopUpService } from "../../../ui-helpers/locked-pop-up/locked-pop-up";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";


export class SecondaryShortcuts extends React.PureComponent<SecondaryShortcutsProps, SecondaryShortcutsState>{

    showLockedUpModal = () => {
        LockedPopUpService.lockedPopUpUnlock.next(true);
    }


    render() {
        const width = 80;
        const height = 80;

        return (
            <Row flex_start>
                <Column>
                    <Row flex_start padded-left-xl marginVertical={40}>
                        <H1>Tools</H1>
                    </Row>
                    {/* <Row> */}
                    <Scrollable width={ScreenWidth}>
                        <AnimatedBox animation={'slideInUp'} duration={1500}>
                            <AnimatedBox animation={'fadeIn'} duration={1500} delay={1000}>
                                <Row space-around >
                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onContentLibrary} track={"clicked on content library"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="fbMessenger">
                                                    <Column center middle>
                                                        <Icon name="ios-images" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Content Library</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onSpecialDays} track={"clicked on special days"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="lush">
                                                    <Column center middle>
                                                        <Icon name="ios-globe" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Special Days</P>
                                        </Column>
                                    </Column>
                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onTextImages} track={"clicked on text images"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="shifter">
                                                    <Column center middle>
                                                        <H4 white-colored size={30}>Text</H4>
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Text Images</P>
                                        </Column>
                                    </Column>
                                </Row>

                                <Row space-around marginTop={10}>
                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onRoyaltyFreeImages} track={"clicked on royalty free images"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="orangeDuo">
                                                    <Column center middle>
                                                        <ImageX source={Assets.icons.icon_image_search} width={40} />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular align-center size={12}>Royalty Free{'\n'}Images</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin track={"clicked on analytics"}>
                                            <Touchable
                                                onPress={this.props.fbConnectedUser ? this.props.onMetrics : this.showLockedUpModal}
                                            >
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="ohHappiness">
                                                    {
                                                        !this.props.fbConnectedUser &&
                                                        <Box absolute top={0} right={0} width={width} height={height} >
                                                            <Box absolute background="black" opacity={0.4} padded zIndex={1} width={width} height={height} borderRadius={10}>
                                                            </Box>
                                                            <Box absolute top={0} right={0} padded zIndex={9}>
                                                                <Icon name="ios-lock" color={'white'} large-2x white />
                                                            </Box>
                                                        </Box>
                                                    }
                                                    <Column center middle>
                                                        <Icon name="ios-stats" large-3x white />
                                                    </Column>

                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Analytics</P>
                                        </Column>
                                    </Column>

                                    {/* Hashtags explorer */}
                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onHashtagsExplorer} track={"clicked on hashtag explorer"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="orange">
                                                    <Column center middle>
                                                        <H1 white-colored size={44}>#</H1>
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Hashtags</P>
                                        </Column>
                                    </Column>
                                </Row>

                                <Row space-around marginTop={10} marginBottom={20}>
                                    {/* Captions explorer */}
                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onCaptionExplorer} track={"clicked on caption explorer"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="purple">
                                                    <Column center middle>
                                                        <Icon name="ios-search" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Captions</P>
                                        </Column>
                                    </Column>



                                    {
                                        this.props.purchaseStatus &&
                                        <Column center>
                                            <Widget width={width} square middle no-margin>
                                                <Touchable onPress={this.props.onGridSlicer} track={"clicked on grid slicer"}>
                                                    <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="nelson">
                                                        <Column center middle>
                                                            <Icon name="md-grid" large-3x white />
                                                        </Column>
                                                    </GradientBox>
                                                </Touchable>
                                            </Widget>
                                            <Column center middle margin-top>
                                                <P regular size={12}>Grid Slicer</P>
                                            </Column>
                                        </Column>
                                    }

                                    {
                                        !this.props.purchaseStatus &&
                                        <Column center>
                                            <Touchable onPress={this.props.gopro}>
                                                <Widget width={width} square middle no-margin>
                                                    <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="nelson">
                                                        <Column center middle>
                                                            <Icon name="md-grid" large-3x white />
                                                        </Column>
                                                    </GradientBox>
                                                </Widget>
                                                <Column center middle margin-top>
                                                    <P regular size={12}>Grid Slicer</P>
                                                </Column>
                                                <Box absolute bottom={35} left={8}>
                                                    <Box borderWidth={1} borderRadius={20} borderColor={UIConfigurations.global.colors.purple_1} background={UIConfigurations.global.colors.white} paddingHorizontal={5}>
                                                        <P size={12} dark-colored>Go Pro 🌟</P>
                                                    </Box>
                                                </Box>
                                            </Touchable>
                                        </Column>
                                    }


                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onAcademy} track={"clicked on academy"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="shifter">
                                                    <Column center middle>
                                                        <Icon name="ios-school" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Academy</P>
                                        </Column>
                                    </Column>
                                </Row>
                            </AnimatedBox>
                        </AnimatedBox>

                        {/* <Column center margin-xl>
                                <Widget width={width} square middle no-margin>
                                    <Touchable onPress={this.props.onThemeTool} track={"clicked on theme tool"}>
                                        <GradientBox width={width} height={height} borderRadius={10} center middle pallet="shifter">
                                            <Column center middle>
                                                <Icon name="ios-color-palette" large-5x white />
                                            </Column>
                                        </GradientBox>
                                    </Touchable>
                                </Widget>
                                <Column center middle margin-top>
                                    <P regular>Content Themes</P>
                                </Column>
                            </Column> */}

                        {/* <AnimatedBox animation={'slideInUp'} duration={1500}>

                            <AnimatedBox animation={'fadeIn'} duration={1500} delay={1000}>
                                <Row flexWrap="wrap" space-between padding={10}>

                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onContentLibrary} track={"clicked on content library"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="fbMessenger">
                                                    <Column center middle>
                                                        <Icon name="ios-images" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Content Library</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onSpecialDays} track={"clicked on special days"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="lush">
                                                    <Column center middle>
                                                        <Icon name="ios-globe" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Special Days</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onTextImages} track={"clicked on text images"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="shifter">
                                                    <Column center middle>
                                                        <H4 white-colored size={30}>Text</H4>
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Text Images</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onMemeGenerator} track={"clicked on meme generator"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="combineLighter">
                                                    <Column center middle>
                                                        <ImageX source={Assets.icons.icon_meme} width={40} />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Meme</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onRoyaltyFreeImages} track={"clicked on royalty free images"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="orangeDuo">
                                                    <Column center middle>
                                                        <ImageX source={Assets.icons.icon_image_search} width={40} />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Royalty Free Images</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin track={"clicked on analytics"}>
                                            <Touchable
                                                onPress={this.props.fbConnectedUser ? this.props.onMetrics : this.showLockedUpModal}
                                            >
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="ohHappiness">
                                                    {
                                                        !this.props.fbConnectedUser &&
                                                        <Box absolute top={0} right={0} width={width} height={height} >
                                                            <Box absolute background="black" opacity={0.4} padded zIndex={1} width={width} height={height} borderRadius={10}>
                                                            </Box>
                                                            <Box absolute top={0} right={0} padded zIndex={9}>
                                                                <Icon name="ios-lock" color={'white'} large-2x white />
                                                            </Box>
                                                        </Box>
                                                    }
                                                    <Column center middle>
                                                        <Icon name="ios-stats" large-3x white />
                                                    </Column>

                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Analytics</P>
                                        </Column>
                                    </Column> */}

                        {/* Hashtags explorer */}
                        {/* <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onHashtagsExplorer} track={"clicked on hashtag explorer"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="orange">
                                                    <Column center middle>
                                                        <H1 white-colored size={44}>#</H1>
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Hashtags</P>
                                        </Column>
                                    </Column> */}

                        {/* Captions explorer */}
                        {/* <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onCaptionExplorer} track={"clicked on caption explorer"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="purple">
                                                    <Column center middle>
                                                        <Icon name="ios-search" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Captions</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onGridSlicer} track={"clicked on grid slicer"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="nelson">
                                                    <Column center middle>
                                                        <Icon name="md-grid" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Grid Slicer</P>
                                        </Column>
                                    </Column>

                                    <Column center>
                                        <Widget width={width} square middle no-margin>
                                            <Touchable onPress={this.props.onAcademy} track={"clicked on academy"}>
                                                <GradientBox style={{ width: width, height: height }} borderRadius={10} center middle pallet="shifter">
                                                    <Column center middle>
                                                        <Icon name="ios-school" large-3x white />
                                                    </Column>
                                                </GradientBox>
                                            </Touchable>
                                        </Widget>
                                        <Column center middle margin-top>
                                            <P regular size={12}>Academy</P>
                                        </Column>
                                    </Column>
                                </Row>
                            </AnimatedBox>

                        </AnimatedBox> */}
                    </Scrollable>
                    {/* </Row> */}
                </Column>
            </Row >
        )
    }
}

export interface SecondaryShortcutsProps {
    onHashtagExplorer: () => any,
    onCaptionLibrary: () => any,
    onContentLibrary: () => any,
    onAcademy: () => any,
    onMetrics: () => any,
    onGridSlicer: () => any
    onCaptionExplorer: () => any,
    onHashtagsExplorer: () => any,
    onMemeGenerator: () => any,
    onRoyaltyFreeImages: () => any,
    onTextImages: () => any,
    onThemeTool: () => any
    onSpecialDays: () => any,
    fbConnectedUser: boolean,
    purchaseStatus: boolean,
    gopro: () => any
}

export interface SecondaryShortcutsState {

}
