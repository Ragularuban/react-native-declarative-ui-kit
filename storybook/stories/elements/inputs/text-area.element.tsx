import styled from 'styled-components/native';
import { UIConfigurations } from '../../config/config';

export const TextArea = styled.TextInput`
        background-color: #fff;
        width: 100%;
        padding:10px;
        font-family: ${UIConfigurations.global.font.regular};
        min-height:120px;
        max-height:150px;
`;