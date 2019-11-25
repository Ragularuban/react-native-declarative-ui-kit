import * as React from 'react';
import ActionSheet from 'react-native-actionsheet';
import { GetProp } from '../../../ui-helpers/helpers';


export default class ActionSheetWrapper extends React.Component<ActionSheetWrapperProps & Partial<ActionSheetWrapperProps>, any> {
    ActionSheetWrapper;
    previousData;

    static defaultProps = {
        data: {
            options: [],
            cancelButtonIndex: 0,
            destructiveButtonIndex: 0,
            onPress: () => { }
        }
    }

    shouldComponentUpdate(nextProps) {
        this.previousData = this.props.data;
        return !(this.props.data == nextProps.data);
    }

    componentDidUpdate() {
        if (this.props.data && this.previousData != this.props.data) {
            this.show();
        }
    }

    show() {
        if (this.ActionSheetWrapper) {
            this.ActionSheetWrapper.show();
        }

    }

    onLayoutRefs = {
        actionSheetWrapper: (ref) => this.ActionSheetWrapper = ref
    }

    onPress = (...args) => {
        this.props.data.onPress(...args);
    }

    render() {

        const ActionSheetWrapperProps = {
            ref: this.onLayoutRefs.actionSheetWrapper,
            options: GetProp(() => this.props.data.options, []),
            cancelButtonIndex: GetProp(() => this.props.data.cancelButtonIndex, 0),
            destructiveButtonIndex: GetProp(() => this.props.data.cancelButtonIndex, 0),
            onPress: this.onPress,
        }

        return (
            <ActionSheet {...ActionSheetWrapperProps} />
        );
    }
}

export interface ActionSheetWrapperProps {
    data: {
        options: any[],
        cancelButtonIndex: number,
        destructiveButtonIndex: number,
        onPress: (...args) => any
    }
}