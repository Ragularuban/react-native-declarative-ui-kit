import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { PeriodType, PeriodElement } from './period.element';

export class PeriodContainer extends PureComponent {

    props: {
        // Currently active date index
        currentPeriodIndex: number,
        // Array of Periods to render
        dates: Array<any>,
        // Callback to handle date select
        onSelectPeriod: (index: number) => void,
        // Callback to handle date render
        onRenderPeriod: (index: number, width: number) => void,
        periodType: PeriodType,
        inactiveButtonsFromEnd: number
    };

    render() {
        const {
            currentPeriodIndex,
            dates,
            onSelectPeriod,
            onRenderPeriod,
        } = this.props;

        return (
            <View style={styles.container}>
                {dates.slice(0, dates.length - (this.props.inactiveButtonsFromEnd)).map((date, index) =>
                    <View key={index}>
                        <PeriodElement
                            date={date}
                            index={index}
                            isActive={index === currentPeriodIndex}
                            onPress={onSelectPeriod}
                            onRender={onRenderPeriod}
                            key={index}
                            periodType={this.props.periodType}
                        />
                    </View>
                )}
                {/* Print Inactive Dates */}
                {dates.slice(dates.length - (this.props.inactiveButtonsFromEnd)).map((date, index) =>
                    <View key={index}>
                        <PeriodElement
                            date={date}
                            index={(dates.length - (this.props.inactiveButtonsFromEnd + 0)) + index}
                            isActive={index === currentPeriodIndex}
                            disabled={true}
                            onPress={() => { }}
                            onRender={onRenderPeriod}
                            key={index}
                            periodType={this.props.periodType}
                        />
                    </View>
                )}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});