import * as React from "react"

import { Row, Box, Touchable } from "../../layout/layout"

import { UIConfigurations } from "../../config/config"

import { ScreenWidth } from "../../../ui-helpers/screen-dimensions"

import { Icon } from "../../elements/icon/icon.element"

import { H3 } from "../../typography/typography"



export class TopHeader extends React.PureComponent<TopHeaderProps & Partial<TopHeaderConnectedProps>, TopHeaderState>{

    static defaultProps = {

    }

    state = {
        isTopModalVisible: false
    }


    action = {

    }

    render() {
        return (
            !this.props.extra ?
                (

                    <Row background={this.props.transparent ? 'transparent' : UIConfigurations.global.colors.white} borderBottomWidth={this.props.transparent ? 0 : 1.5} zIndex={99} padded-vertical-l space-between borderColor={UIConfigurations.global.colors.lighter} width={ScreenWidth} >
                        <Box width={ScreenWidth / 5} padded-left-l>
                            <Touchable onPress={this.props.goBack}>
                                {this.props.left}
                                {
                                    !this.props.left &&
                                    <Touchable onPress={this.props.goBack}>
                                        <Icon name={'ios-arrow-back'} large />
                                    </Touchable>
                                }
                            </Touchable>
                        </Box>
                        {
                            this.props.center &&
                            <Box width={ScreenWidth / 3} center>
                                {this.props.center}
                            </Box>
                        }
                        {
                            !this.props.center &&
                            <Box width={ScreenWidth / 2} center>
                                <H3>{this.props.title}</H3>
                            </Box>
                        }
                        <Box width={ScreenWidth / 5} flex_end padded-right-l>
                            {this.props.right}
                        </Box>


                    </Row >

                ) :
                (
                    <Row padded-l borderBottomWidth={1.5} borderColor={UIConfigurations.global.colors.lighter}>
                        {this.props.extra}
                    </Row>
                )


        )
    }


}


export interface TopHeaderProps {
    left?: JSX.Element,
    title?: string,
    center?: JSX.Element,
    right?: JSX.Element,
    goBack?: () => any,
    extra?: JSX.Element,
    transparent?: boolean,
    mobileNotch?: boolean
}

export interface TopHeaderState {

}

export interface TopHeaderConnectedProps {

}