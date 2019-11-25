import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { isObservable } from "rxjs";


export class Connect extends React.PureComponent<ConnectProps, ConnectState>{

    state;
    subscribers;

    constructor(props) {
        super(props);
        this.state = props.connector();
    }



    render() {
        return (
            React.cloneElement(this.props.children, { ...this.state, onModalViewScroll: (this.props as any).onModalViewScroll })
        );
    }
}

export interface ConnectProps {
    connector: () => any,
    children: JSX.Element
}

export interface ConnectState {

}
