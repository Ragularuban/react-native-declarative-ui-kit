import * as React from "react";
import { Component } from "react";
import { Row, Column, Touchable, Scrollable, Box } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { RefreshControl, ScrollView } from "react-native";
import { Icon } from "../../elements/icon/icon.element";


export class ModalScrollContainer extends React.PureComponent<ModalScrollContainerProps, ModalScrollContainerState>{
    scrollViewRef;

    onRef = (ref) => {
        this.scrollViewRef = ref;
    };

    componentDidMount() {
        console.log("Send Ref");
        if (this.props.getRef) {
            this.props.getRef(this);
        }
    }

    scrollToTop() {
        console.log("Scroll to top");
        this.scrollViewRef.scrollTo({ x: 0, y: 0, animated: true });
    }

    render() {
        return (
            <ScrollView
                onScroll={this.props.onScroll}
                scrollEventThrottle={16}
                stickyHeaderIndices={this.props.stickyHeaders || []}
                keyboardShouldPersistTaps='handled'
                keyboardDismissMode='on-drag'
                ref={this.onRef}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={this.props.onSwipe}
                        tintColor="#fff"
                        title="pull down to close"

                    >
                        <Row center middle fill>
                            <Box style={{ zIndex: 9, position: 'absolute', top: 10 }} center middle>
                                <Icon name="ios-arrow-round-down" large-xx />
                                {/* <P>Pull to close</P> */}
                            </Box>
                        </Row>
                    </RefreshControl>
                }
            >
                {this.props.children}
            </ScrollView>
        )
    }
}

export interface ModalScrollContainerProps {
    onScroll?: () => any,
    onSwipe?: () => any,
    stickyHeaders?: number[],
    getRef?: (ref) => any
}

export interface ModalScrollContainerState {

}
