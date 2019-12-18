import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import AppToasts, { ToastOptions } from "../../elements/app-toasts/app-toasts.component";


export class Toasts extends React.Component<ToastsProps & Partial<ToastsConnectedProps>, ToastsState>{
    toastRef: AppToasts;
    previousData;


    onLayoutRefs = {
        toast: (ref) => this.toastRef = ref
    }

    shouldComponentUpdate(prevProps) {
        this.previousData = this.props.toast;
        return !(this.props.toast == prevProps.toast);
    }

    componentDidUpdate() {
        if (this.toastRef) {
            if (this.props.toast && this.previousData != this.props.toast) {
                console.log('props toast -> ', this.props.toast)
                this.toastRef.show(this.props.toast);
            } else {
                this.toastRef.hide();
            }
        }
    }

    render() {
        console.log('inside render -> ', this.props.toast)
        return (
            <AppToasts ref={this.onLayoutRefs.toast} />
        )
    }
}

export interface ToastsProps {
}


export interface ToastsConnectedProps {
    toast: ToastOptions
}

export interface ToastsState {

}
