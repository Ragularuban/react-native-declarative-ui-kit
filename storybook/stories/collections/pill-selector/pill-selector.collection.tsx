import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { ButtonX } from "../../elements/button/button.element";


export class PillSelector extends React.PureComponent<PillSelectorProps, PillSelectorState>{

    render() {
        return (
            <Column>
                <Box row space-between margin-xxl background="#f4f4f4" borderRadius={25}>
                    {
                        this.props.items.map((item) => (
                            <ButtonX
                                key={item.label}
                                primary={this.props.selectedItem === item.id}
                                label={item.label}
                                onPress={(() => this.props.onSelect(item.id))}
                                dark={this.props.selectedItem !== item.id}
                                inverted={this.props.selectedItem !== item.id}
                                style={this.props.selectedItem !== item.id ? { backgroundColor: "#f4f4f4", paddingVertical: 10 } : {}}
                            />
                        ))
                    }
                </Box>
            </Column>
        )
    }
}

export interface PillSelectorProps {
    items: { id: number, label: string }[];
    selectedItem: number;
    onSelect: (itemId: number) => any;
}

export interface PillSelectorState {

}
