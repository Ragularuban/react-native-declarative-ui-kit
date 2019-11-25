import styled from 'styled-components/native';
import { generateTypographyStyle, generateColorStyle, FontStyleOptions, ColorOptions, TypographyProps, generateAlignmentProps } from './typography.helpers';
import { getPaddingStyles, PaddingOptions, getPaddingForSmallerScreen } from '../layout/layout.helpers';
import { isSmallerScreen, ifSmallerScreen } from '../../ui-helpers/is-smaller-screen';
import { UIConfigurations } from '../config/config';


// H1
export const H1: (props: TypographyProps) => any = styled.Text`
  font-family: ${UIConfigurations.global.font.semiBold};
  font-size: ${ifSmallerScreen(24,30)};
  color: #4A4A4A;
  ${props => generateTypographyStyle(props)}
  ${props => isSmallerScreen? getPaddingForSmallerScreen(props): getPaddingStyles(props)} 
  ${props => generateColorStyle(props)}
  ${props => generateAlignmentProps(props)}
`;

// H2
export const H2: (props: TypographyProps) => any = styled.Text`
  font-family: ${UIConfigurations.global.font.semiBold};
  font-size:${ifSmallerScreen(18,24)};
  color: #4A4A4A;
  ${props => generateTypographyStyle(props)}
  ${props => isSmallerScreen? getPaddingForSmallerScreen(props): getPaddingStyles(props)} 
  ${props => generateColorStyle(props)}
  ${props => generateAlignmentProps(props)}
`;

// H3
export const H3: (props: TypographyProps) => any = styled.Text`
  font-family: ${UIConfigurations.global.font.semiBold};
  font-size:${ifSmallerScreen(16,20)};
  color: #4A4A4A;
  ${props => generateTypographyStyle(props)}
  ${props => isSmallerScreen? getPaddingForSmallerScreen(props): getPaddingStyles(props)} 
  ${props => generateColorStyle(props)}
  ${props => generateAlignmentProps(props)}
`;

// H4
export const H4: (props: TypographyProps) => any | any[] = styled.Text`
  font-family: ${UIConfigurations.global.font.semiBold};
  font-size:${ifSmallerScreen(13,16)};
  color: #4A4A4A;
  ${props => generateTypographyStyle(props)}
  ${props => isSmallerScreen? getPaddingForSmallerScreen(props): getPaddingStyles(props)} 
  ${props => generateColorStyle(props)}
  ${props => generateAlignmentProps(props)}
`;

// P
export const P: (props: TypographyProps) => any = styled.Text`
  font-family: ${UIConfigurations.global.font.regular};
  font-size:${ifSmallerScreen(12,14)};
  color: #4A4A4A;
  ${props => generateTypographyStyle(props)}
  ${props => isSmallerScreen? getPaddingForSmallerScreen(props): getPaddingStyles(props)} 
  ${props => generateColorStyle(props)}
  ${props => generateAlignmentProps(props)}
`;
