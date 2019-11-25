import React, { PureComponent } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
const moment = require('moment');

export class PeriodElement extends PureComponent {

    props: {
        // Date to render
        date: any,
        // Index for `onPress` and `onRender` callbacks
        index: number,
        // Whether it's the currently selected date or no
        isActive: boolean,
        // Called when user taps a date
        onPress: (index: number) => void,
        // Called after date is rendered to pass its width up to the parent component
        onRender: (index: number, width: number) => void,
        periodType: PeriodType,
        disabled?: boolean;
    };

    // Style helper functions that merge active date styles with the default ones
    // when rendering a date that was selected by user or was set active by default

    getContainerStyle() {
        return [{
            ...styles.container,
            ...(this.props.isActive ? styles.containerActive : {})
        }];
    };

    getPrimaryTextStyle() {
        let computedStyle: any = {
            ...styles.text,
            ...styles.day,
            ...(this.props.isActive ? styles.textActive : (this.props.disabled ? styles.textDisabled : {}))
        };
        return computedStyle;
    };

    getSecondaryTextStyle() {
        let computedStyle: any[] = [{
            ...styles.text,
            ...styles.date,
            ...(this.props.isActive ? styles.textActive : (this.props.disabled ? styles.textDisabled : {}))
        }]
        return computedStyle;
    }

    // Call `onRender` and pass component's with when rendered
    onLayout = (event: { nativeEvent: { layout: { x: number, y: number, width: number, height: number } } }) => {
        const {
            index,
            onRender,
        } = this.props;
        const { nativeEvent: { layout: { width } } } = event;
        onRender(index, width);
    };

    // Call `onPress` passed from the parent component when date is pressed
    onPress = () => {
        const { index, onPress } = this.props;
        onPress(index);
    };

    renderPeriod(date) {
        switch (this.props.periodType) {
            case PeriodType.DAILY: {
                return (
                    <View>
                        <Text style={this.getPrimaryTextStyle()}>{date.format('MMM').toUpperCase()}</Text>
                        <Text style={this.getPrimaryTextStyle()}>{date.format('ddd').toUpperCase()}</Text>
                        <Text style={this.getSecondaryTextStyle()}>{date.format('DD')}</Text>
                    </View>
                );
            }
            case PeriodType.WEEKLY: {
                return (
                    <View>
                        <Text style={this.getPrimaryTextStyle()}>Week</Text>
                        <Text style={this.getSecondaryTextStyle()}>{date.week()}</Text>
                        {
                            this.props.isActive && 
                            <Text style={this.getSecondaryTextStyle()}>{`${moment().day("Monday").week(date.week()).format("Do MMM")} - ${moment().day("Sunday").week(date.week()+1).format("Do MMM")}`}</Text>
                        }
                    </View>
                );
            }
            case PeriodType.MONTHLY: {
                return (
                    <View>
                        <Text style={this.getPrimaryTextStyle()}>{date.format('YYYY').toUpperCase()}</Text>
                        <Text style={this.getSecondaryTextStyle()}>{date.format('MMM').toUpperCase()}</Text>
                    </View>
                );
            }
            default: {
                return (<View></View>);
            }
        }
    }

    render() {
        const { date } = this.props;
        if (!this.props.disabled) {
            return (
                <TouchableOpacity
                    style={this.getContainerStyle()}
                    onLayout={this.onLayout}
                    onPress={this.onPress}
                >
                    {this.renderPeriod(date)}
                </TouchableOpacity>
            );
        }else{
            return (
                <View
                    style={this.getContainerStyle()}
                    onLayout={this.onLayout}
                >
                    {this.renderPeriod(date)}
                </View>
            );
        }

    }

}

const styles = {
    container: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    containerActive: {
        borderBottomColor: '#FFFFFF',
    },
    day: {
        fontSize: 12,
    },
    date: {
        // fontSize: 22,
        fontSize: 14,
    },
    text: {
        color: '#444',
        textAlign: 'center',
    },
    textActive: {
        color: '#111',
        fontWeight: 'bold'
    },
    textDisabled: {
        color: '#ccc',
    }
};

export enum PeriodType {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY"
}