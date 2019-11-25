import { copilot, walkthroughable, CopilotStep } from '@okgrow/react-native-copilot';
import * as React from 'react';
import * as _ from 'lodash';
import { Box } from '../../stories/layout/layout';

export const CopilotInner = (props) => {
    return <Box {..._.omit(props, 'copilot')} {...props.copilot} ></Box>
}
export const Copilot = (props) => {
    return (
        <CopilotStep text={props.text || ""} order={props.order || 1} name={props.name || "general"}>
            <CopilotInner>{props.children}</CopilotInner>
        </CopilotStep>
    );
}

export function CoPilotedComponent() {
    return function componentDecorator(originalComponent) {
        let Ele = copilot({
            animated: true, // Can be true or false
            overlay: 'svg', // Can be either view or svg
        })(originalComponent);;
        return class ConnectedComponent extends React.PureComponent<any, any>{
            static navigationOptions = originalComponent.navigationOptions;
            render() {
                return (<Ele {...this.props} />);
            }
        } as any
    };
}