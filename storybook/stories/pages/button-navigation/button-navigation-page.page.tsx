import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { ButtonNavigationX } from "../../elements/button-navigation/button-navigation.element";
import { Icon } from "../../elements/icon/icon.element";



export class ButtonNavigationPage extends React.PureComponent<ButtonNavigationPageProps & Partial<ButtonNavigationPageConnectedProps>, ButtonNavigationPageState>{

    static defaultProps = {

    }

    state = {

    }

    UIActions = {

    }

    action = {

    }

    render() {

        const pageHeaderProps = {
            onBackPressed: this.props.goBack,
            previousScreen: "Back",
            title: "Buttons Page"
        };
        return (
            <Column fill page white-bg>
                <Scrollable stickyHeaderIndices={[0]}>
                    {/* Header */}
                    <Widget no-margin padded-xxl>
                        <H1>Button Navigation Examples</H1>
                    </Widget>

                    <Widget>
                        <ButtonNavigationX
                            onChange={(route) => console.log('route', route)}
                            warning
                            primary
                            // tabs={[{ title: 'L' }, { title: 'L' }, { title: 'L' }]}
                            tabs={[{ icon: <Icon white name={'md-cloud-circle'} /> }, { icon: <Icon white name={'md-cloud-circle'} /> }, { icon: <Icon white name={'md-cloud-circle'} /> }]}
                        />
                    </Widget>


                </Scrollable>
                {/* Bottom Bar */}
            </Column>
        )
    }

}

export interface ButtonNavigationPageProps {
    goBack?: () => any
}

export interface ButtonNavigationPageState {

}

export interface ButtonNavigationPageConnectedProps {

}
