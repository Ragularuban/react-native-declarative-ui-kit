import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { RefreshControl } from "react-native";
import { ScreenWidth } from "../../../ui-helpers/screen-dimensions";
import { ImageX } from "../../elements/image/image.element";
import { Icon } from "../../elements/icon/icon.element";
import { BottomModal } from "../../playgrounds/modal-example/modalize.modal";
import { LottieAnimation } from "../../elements/lottie-animation/lottie-animation.element";
import { CryingAnimation } from "../../../../assets/lottie-animations/crying";


export class ComingSoonModal extends React.PureComponent<ComingSoonModalProps & Partial<ComingSoonModalConnectedProps>, ComingSoonModalState>{

    static defaultProps = {

    }

    state = {

    }

    UIActions = {

    }

    action = {

    }

    render() {
        return (
            <BottomModal isVisible={this.props.isModalVisible} onHideModal={this.props.onHideModal}
                footer={
                    <Box bottom={0} left={0} width={ScreenWidth}>
                        <BottomBar
                            center={
                                <ButtonX label="Okay" dark onPress={this.props.onHideModal} />
                            }
                        />
                    </Box>
                }
            >
                <Box marginTop={70} marginBottom={70}>
                    <Column fill>
                        <Box fill minHeight={300} center middle>
                            <H1> We are still building this!</H1>
                            <LottieAnimation source={CryingAnimation} width={300} height={300} />
                        </Box>
                    </Column>
                </Box>
            </BottomModal>
        );
    }

}

export interface ComingSoonModalProps {
    isModalVisible: boolean,
    onHideModal: () => any,
}

export interface ComingSoonModalState {

}

export interface ComingSoonModalConnectedProps {

}
