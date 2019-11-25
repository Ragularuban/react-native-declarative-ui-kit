import * as React from 'react';
import { LayoutProps } from '../stories/layout/layout.helpers';
import { ViewStyle, ViewProps } from 'react-native';
import { ActionContext } from './actions-context';
import { Box } from '../stories/layout/layout';
import { Component } from 'react';

declare type ObjectType<T> = {
    new(...args: any[]): T;
};

export class Section extends React.PureComponent<((LayoutProps | ViewStyle | ViewProps) & { name?: string })> {
    static contextType = ActionContext;

    render() {
        const context = this.context;

        return (
            <ActionContext.Provider value={((context ? `${context}->` : '') + this.props.name)}>
                <Box {...this.props}>
                    {this.props.children}
                </Box>
            </ActionContext.Provider >
        );
    }
}



export function AsSection(name: string) {
    return function AsSectionInner(OriginalComponent: ObjectType<Component>) {
        return class ActualComponent extends React.PureComponent<any, any>{

            static contextType = ActionContext;

            componentWillMount() {
                (OriginalComponent as any).sectionName = name;
            }

            render() {
                const context = this.context;
                return (
                    <ActionContext.Provider value={((context ? `${context}->` : '') + name)}>
                        <OriginalComponent {...this.props} />
                    </ActionContext.Provider >
                )
            };
        } as any
    }
}