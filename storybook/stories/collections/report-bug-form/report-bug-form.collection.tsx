import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { TextArea } from "../../elements/inputs/text-area.element";
import { ButtonX } from "../../elements/button/button.element";


export class ReportBugForm extends React.PureComponent<ReportBugFormProps, ReportBugFormState>{

    state = {
        issueDescription: ""
    }

    onTextChange = {
        issueDescription: (issueDescription: string) => {
            this.setState({ issueDescription });
        }
    }

    onSend = () => {
        this.props.onSend(this.state.issueDescription);
    }

    render() {
        return (
            <Column fill {...this.props.panHandlers} padded-xxl>
                <Scrollable keyboardShouldPersistTaps='handled' keyboardDismissMode='on-drag'>
                    <H1 padded-left padded-bottom-xl>Report an issue</H1>
                    <TextArea multiline
                        numberOfLines={8}
                        placeholder="Describe the issue you faced..."
                        underlineColorAndroid="transparent"
                        value={this.state.issueDescription}
                        onChangeText={this.onTextChange.issueDescription}
                        autoFocus={true}
                    />
                    <Row center>
                        <ButtonX label="Send" icon="ios-send" labeled dark={!this.state.issueDescription} onPress={this.state.issueDescription ? this.onSend : null} />
                    </Row>
                </Scrollable>

            </Column>
        )
    }
}

export interface ReportBugFormProps {
    panHandlers?: boolean,
    onSend: (description: string) => any
}

export interface ReportBugFormState {

}
