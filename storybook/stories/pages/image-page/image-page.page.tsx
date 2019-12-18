import * as React from "react";
import { Row, Column, Touchable, Scrollable, Box, AnimatedBox } from "../../layout/layout";
import { H1, H2, H3, H4, P } from "../../typography/typography";
import { Widget } from "../../elements/card/card.element";
import { BottomBar } from "../../collections/bottom-bar/bottom-bar.collection";
import { ButtonX } from "../../elements/button/button.element";
import { ButtonNavigationX } from "../../elements/button-navigation/button-navigation.element";
import { Icon } from "../../elements/icon/icon.element";
import { ImageX } from "../../elements/image/image.element";
import { Assets } from "../../config/config";



export class ImageXPage extends React.PureComponent<ImageXPageProps & Partial<ImageXPageConnectedProps>, ImageXPageState>{

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
                        <H1>Image Examples</H1>
                    </Widget>

                    <Widget>
                        <ImageX source={Assets.misc.avatar} width={100} height={100}/>
                    </Widget>


                </Scrollable>
                {/* Bottom Bar */}
            </Column>
        )
    }

}

export interface ImageXPageProps {
    goBack?: () => any
}

export interface ImageXPageState {

}

export interface ImageXPageConnectedProps {

}
