import * as React from "react";
import { Platform, View, Text, StyleSheet, ScrollView, ImageBackground, StatusBar, Animated, ListView, Image, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';

// var Dimensions = require('Dimensions')
// var { width, height } = Dimensions.get('window');

const moment = require('moment');
import { PeriodContainer } from "./elements/period-container.element";
import { PeriodType } from "./elements/period.element";


const { width: screenWidth } = Dimensions.get('window');

const formatMonth = (date: any): string => date.format('MMMM');

const formatYear = (date: any): string => date.format('YYYY');



export class PeriodSelection extends React.Component<PeriodSelectionProps, PeriodSelectionState> {

    state: PeriodSelectionState;
    static defaultProps = {
        // Show 5 Period Nodes before the current day
        periodNodesBeforeCurrent: 5,
        // And after
        periodNodesAfterCurrent: 5,
        periodType: PeriodType.DAILY,
        inactiveButtonsFromEnd: 0,
        visibleYears: null,
        visibleMonths: null,
        width: screenWidth
    };
    _scrollView;

    constructor(props) {
        super(props);
        this.state = {
            allPeriodNodesHaveRendered: false,
            currentPeriodNodeIndex: props.periodNodesBeforeCurrent,
            dates: this.getDates(),
            periodWidths: undefined,
            scrollPositionX: 0,
        };
    }

    getDates() {
        const {
            currentDate,
            periodNodesBeforeCurrent,
            periodNodesAfterCurrent,
        } = this.props;

        // Go `showPeriodNodesBeforeCurrent` ago before today or custom `currentDate`
        const startDay = moment(currentDate || undefined).startOf('isoWeek')
            .subtract(periodNodesBeforeCurrent + 1,
                (this.props.periodType == PeriodType.DAILY) ? 'days' : (
                    (this.props.periodType == PeriodType.WEEKLY) ? 'w' : ('M')
                )
            );
        // Number of days in total
        const totalPeriodNodesCount = periodNodesBeforeCurrent + periodNodesAfterCurrent + 1;
        // And return an array of `totalPeriodNodesCount` dates
        return [...Array(totalPeriodNodesCount)]
            .map(_ => startDay.add(1,
                (this.props.periodType == PeriodType.DAILY) ? 'days' : (
                    (this.props.periodType == PeriodType.WEEKLY) ? 'w' : ('M')
                )
            ).clone());
    };

    onSelectDay = (index: number) => {
        const { dates } = this.state;
        const { onSelectDate } = this.props;
        this.setState({ currentPeriodNodeIndex: index }, this.scrollToCurrentDay);
        onSelectDate(dates[index]);
    };

    onRenderDay = (index: number, width: number) => {
        const { periodWidths } = this.state;
        const {
            periodNodesBeforeCurrent,
            periodNodesAfterCurrent,
        } = this.props;

        // Check whether all date have been rendered already
        const allPeriodNodesHaveRendered = periodWidths
            && Object.keys(periodWidths).length >= periodNodesBeforeCurrent + periodNodesAfterCurrent;

        this.setState(prevState => ({
            allPeriodNodesHaveRendered,
            periodWidths: {
                // keep all existing widths added previously
                ...prevState.periodWidths,
                // keep the index for calculating scrolling position for each day
                [index]: width,
            },
        }), () => {
            if (allPeriodNodesHaveRendered) {
                this.scrollToCurrentDay();
                this.updateVisibleMonthAndYear();
            }
        });
    };

    // Returns a subset of dates currently visible on the screen
    getVisibleDates = (): Array<any> => {

        const {
            dates,
            periodWidths,
            scrollPositionX,
        } = this.state;

        if (!periodWidths) {
            return null;
        }

        let datePositionX = 0;
        let firstVisibleDateIndex = undefined;
        let lastVisibleDateIndex = undefined;

        // Iterate through `dayWidths` to  $FlowFixMe
        (Object as any).values(periodWidths).some((width: number, index: number) => {

            if (firstVisibleDateIndex === undefined       // not set yet
                && datePositionX >= scrollPositionX  // first date visible
            ) {
                firstVisibleDateIndex = index > 0 ? index - 1 : index;
            }

            if (lastVisibleDateIndex === undefined                      // not set yet
                && datePositionX >= scrollPositionX + this.props.width  // first date not visible behind the right edge
            ) {
                lastVisibleDateIndex = index;
            }

            // Increment date position by its width for the next iteration
            datePositionX += width;

            // return true when both first and last visible days found to break out of loop
            return !!(firstVisibleDateIndex && lastVisibleDateIndex);
        });

        // Return a subset of visible dates only
        return dates.slice(firstVisibleDateIndex, lastVisibleDateIndex);
    };

    getVisibleMonthAndYear = (): string => {
        const {
            dates,
            visibleMonths,
            visibleYears,
        } = this.state;

        // No `visibleMonths` or `visibleYears` yet
        if (!visibleMonths || !visibleYears) {
            // Return the month and the year of the very first date
            if (dates) {
                const firstDate = dates[0];
                return `${formatMonth(firstDate)}, ${formatYear(firstDate)}`;
            }
            return undefined;
        }

        // One or two months withing the same year
        if (visibleYears.length === 1) {
            return `${visibleMonths.join(' – ')},  ${visibleYears[0]}`;
        }

        // Two months within different years
        return visibleMonths
            .map((month, index) => `${month}, ${visibleYears[index]}`)
            .join(' – ');
    };

    // Update visible month(s) and year(s) of the dates currently visible on the screen
    updateVisibleMonthAndYear = () => {

        const { allPeriodNodesHaveRendered } = this.state;

        if (!allPeriodNodesHaveRendered) {
            return;
        }

        const visibleDates = this.getVisibleDates();

        if (!visibleDates) {
            return;
        }

        let visibleMonths = [];
        let visibleYears = [];

        visibleDates.forEach((date: any) => {
            const month = formatMonth(date);
            const year = formatYear(date);
            if (!(visibleMonths as any).includes(month)) {
                visibleMonths.push(month);
            }
            if (!(visibleYears as any).includes(year)) {
                visibleYears.push(year);
            }
        });

        this.setState({
            visibleMonths,
            visibleYears,
        });
    };

    scrollToCurrentDay = () => {
        const {
            allPeriodNodesHaveRendered,
            currentPeriodNodeIndex,
            periodWidths,
        } = this.state;

        // Make sure we have all required values
        if (!allPeriodNodesHaveRendered || currentPeriodNodeIndex === undefined || currentPeriodNodeIndex === null) {
            return;
        }

        // Put all day width values into a simple array $FlowFixMe
        const dayWidthsArray: Array<number> = (Object as any).values(periodWidths);
        // Total width all days take
        const allDaysWidth = dayWidthsArray.reduce((total, width) => width + total, 0);
        // Current day button width
        const currentDayWidth = dayWidthsArray[currentPeriodNodeIndex];
        // Minimal possible X position value to prevent scrolling before the first day
        const minX = 0;
        // Maximum possible X position value to prevent scrolling after the last day
        const maxX = allDaysWidth > this.props.width
            ? allDaysWidth - this.props.width
            : 0; // no scrolling if there's nowhere to scroll

        let scrollToX;

        scrollToX = dayWidthsArray
            // get all days before the target one
            .slice(0, currentPeriodNodeIndex + 1)
            // and calculate the total width
            .reduce((total, width) => width + total, 0)
            // Subtract half of the screen width so the target day is centered
            - this.props.width / 2 - currentDayWidth / 2;

        console.log("scrollToX: ", scrollToX);
        // Do not scroll over the left edge
        if (scrollToX < minX) {
            scrollToX = 0;
        }
        // Do not scroll over the right edge
        else if (scrollToX > maxX) {
            scrollToX = maxX;
        }

        this._scrollView.scrollTo({ x: scrollToX });
    };

    onScroll = (event: { nativeEvent: { contentOffset: { x: number, y: number } } }) => {
        const { nativeEvent: { contentOffset: { x } } } = event;
        this.setState({ scrollPositionX: x }, this.updateVisibleMonthAndYear);
    };

    render() {

        const {
            dates,
            currentPeriodNodeIndex,
        } = this.state;

        return (
            <View>
                {/* <Text style={styles.visibleMonthAndYear}>
                    {visibleMonthAndYear}
                </Text> */}
                <Text style={{ fontWeight: 'bold', color: '#777', fontSize: 10, textAlign: 'center' }}>
                    Select {
                        this.props.periodType == PeriodType.WEEKLY ? 'Week' :
                            this.props.periodType == PeriodType.MONTHLY ? 'Month' : 'Day'
                    }
                </Text>
                <ScrollView
                    ref={scrollView => { this._scrollView = scrollView; }}
                    horizontal={true}                         // Enable horizontal scrolling
                    showsHorizontalScrollIndicator={false}    // Hide horizontal scroll indicators
                    automaticallyAdjustContentInsets={false}  // Do not adjust content automatically
                    scrollEventThrottle={100}
                    onScroll={this.onScroll}
                >
                    <PeriodContainer
                        dates={dates}
                        currentPeriodIndex={currentPeriodNodeIndex}
                        onSelectPeriod={this.onSelectDay}
                        onRenderPeriod={this.onRenderDay}
                        periodType={this.props.periodType}
                        inactiveButtonsFromEnd={this.props.inactiveButtonsFromEnd}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});


export interface PeriodSelectionProps {
    periodNodesBeforeCurrent?: number,
    periodNodesAfterCurrent?: number,
    periodType?: PeriodType,
    inactiveButtonsFromEnd?: number,
    currentDate?: any,
    onSelectDate?: (date: any) => any,
    width?: number
}

export interface PeriodSelectionState {
    dates?: any[],
    allPeriodNodesHaveRendered?: boolean,
    currentPeriodNodeIndex: number,
    periodWidths?: any,
    scrollPositionX?: number,
    visibleYears?: any,
    visibleMonths?: any,
}