import * as React from "react";
import { Column, Scrollable, Row } from "../../layout/layout";
import { Widget } from "../../elements/card/card.element";
import { H1, P } from "../../typography/typography";
import { CheckBoX } from "../../elements/check-box/check-box.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { PopUpModalX } from "../../elements/popup-modal/popup-modal.element";




export class PopupPage extends React.PureComponent<PopupPageProps & Partial<PopupPageConnectedProps>, PopupPageState>{

    static defaultProps = {

    }

    state = {
        modal: false
    }

    UIActions = {

    }

    action = {

    }

    render() {

        const pageHeaderProps = {
            onBackPressed: this.props.goBack,
            previousScreen: "Back",
            title: "Inputs Page"
        };
        return (
            <Column fill page>
                <Scrollable stickyHeaderIndices={[0]}>
                    <PopUpModalX
                        isVisible={this.state.modal}
                        top={
                            <Row space-between>
                                <P>lol</P>
                                <P>lol</P>
                            </Row>
                        }
                        onClose={() => this.setState({ modal: false })}
                    />
                    {/* Header */}
                    <Widget no-margin padded-xxl>
                        <H1>PopUp Modal</H1>
                    </Widget>
                    <Widget>
                        <ButtonX onPress={() => this.setState({ modal: true })} primary label={"PopUp"} />
                    </Widget>

                </Scrollable>

            </Column >
        )
    }

}

export interface PopupPageProps {
    goBack?: () => any
}

export interface PopupPageState {

}

export interface PopupPageConnectedProps {

}
