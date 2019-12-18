import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { ButtonNavigationX } from "../../elements/button-navigation/button-navigation.element";
import { Icon } from "../../elements/icon/icon.element";
import { Toasts } from "../../collections/toasts/toasts.collection";
import AppToasts, { ToastTypes, ToastOptions } from "../../elements/app-toasts/app-toasts.component";



export class ToastPage extends React.PureComponent<ToastPageProps & Partial<ToastPageConnectedProps>, ToastPageState>{

    toastRef: AppToasts;

    onLayoutRefs = {
        toast: (ref) => this.toastRef = ref
    }

    static defaultProps = {

    }

    state: ToastPageState = {
        toast: {
            autoHide: 3000,
            type: ToastTypes.ERROR,
            text: "Something Went Wrong, Try Again !"
        }
    }

    UIActions = {

    }



    action = {
        pop: () => {
            this.setState({
                toast: {
                    autoHide: 2000,
                    type: ToastTypes.WARNING,
                    text: "Something Went Wrong, Try Again !"
                }
            })
        },
        pop2: () => {

            this.toastRef.show({
                autoHide: 2000,
                type: ToastTypes.WARNING,
                text: "Something Went Wrong, Try Again !"
            });
        }
    }

    render() {

        const pageHeaderProps = {
            onBackPressed: this.props.goBack,
            previousScreen: "Back",
            title: "Buttons Page"
        };
        return (
            <Column fill page white-bg>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */}
                    <Widget no-margin padded-xxl>
                        <H1>Toast Examples</H1>
                    </Widget>

                    <Widget>
                        <ButtonX primary onPress={this.action.pop2} />
                        <ButtonX primary onPress={this.action.pop} />
                    </Widget>

                    <Widget>

                    </Widget>


                </Scrollable>
                {/* Bottom Bar */}
                <Toasts
                    toast={this.state.toast}
                />
                <AppToasts ref={this.onLayoutRefs.toast} />
            </Column>
        )
    }

}

export interface ToastPageProps {
    goBack?: () => any
}

export interface ToastPageState {
    toast: ToastOptions
}

export interface ToastPageConnectedProps {

}

