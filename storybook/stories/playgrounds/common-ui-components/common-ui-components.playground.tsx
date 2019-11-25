import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { InAppNotification } from "../../collections/in-app-notification/in-app-notification.collection";
import { ButtonX } from "../../elements/button/button.element";
import { Toasts } from "../../collections/toasts/toasts.collection";
import { ToastTypes } from "../../elements/app-toasts/app-toasts.component";
import { GlobalProcessingIndicator } from "../../collections/global-processing-indicator/global-loading-indicator.collection";
import ActionSheetWrapper from "../../collections/action-sheet-wrapper/action-sheet-wrapper.collection";
import UpdateRequiredPopup from "../../collections/update-required-popup/update-required-popup.collection";


export class CommonUiComponentsPlayground extends React.PureComponent<CommonUiComponentsProps, CommonUiComponentsState>{
    state = {
        notification: null,
        toast: null,
        showLoading: false,
        actionSheetData: null,
        isUpdateRequiredModalVisible: false
    }

    render() {
        return (
            <Column fill page>
                <Box padded>
                    <ButtonX label="Show Notification" onPress={() => {
                        this.setState({
                            notification: {
                                title: "Hello",
                                message: "How are you",
                                // icon: any,
                                onPress: () => {
                                    console.log("tadah");
                                }
                            }
                        });
                    }} />
                </Box>
                <Box padded>
                    <ButtonX label="Show Toast" onPress={() => {
                        this.setState({
                            toast: {
                                autoHide: 2000,
                                type: ToastTypes.INFO,
                                text: "Hello",
                            }
                        });
                    }} />
                </Box>
                <Box padded>
                    <ButtonX label="Show Loading Indicator" onPress={() => {
                        this.setState({
                            showLoading: true
                        });
                        setTimeout(() => {
                            this.setState({
                                showLoading: false
                            });
                        }, 4000)
                    }} />
                </Box>

                <Box padded>
                    <ButtonX label="Trigger Action Sheet" onPress={() => {
                        let options = ['Cancel', 'Take a photo', 'Choose from Photo Gallery', 'Choose from Content Library'];
                        this.setState({
                            actionSheetData: {
                                options: options,
                                cancelButtonIndex: 0,
                                destructiveButtonIndex: 0,
                                onPress: async (index) => {
                                    console.log("Helloo");
                                }
                            }
                        });
                    }} />
                </Box>

                <Box padded>
                    <ButtonX label="Show Update Modal" onPress={() => {
                        this.setState({
                            isUpdateRequiredModalVisible: true
                        });
                        setTimeout(() => {
                            this.setState({
                                isUpdateRequiredModalVisible: false
                            });
                        }, 5000)
                    }} />
                </Box>


                {/* In App Notification */}
                <InAppNotification notification={this.state.notification} />
                {/* Toasts */}
                <Toasts toast={this.state.toast} />
                {/* Global Loading Indicator */}
                <GlobalProcessingIndicator isVisible={this.state.showLoading} />
                {/* Action Sheet */}
                <ActionSheetWrapper data={this.state.actionSheetData} />
                {/* Update required popup */}
                <UpdateRequiredPopup visible={this.state.isUpdateRequiredModalVisible} />
            </Column>
        )
    }
}

export interface CommonUiComponentsProps {

}

export interface CommonUiComponentsState {

}
