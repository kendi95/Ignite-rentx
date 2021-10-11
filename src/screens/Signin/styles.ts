import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  /* flex: 1; */
  padding: 0 24px;

  background: ${({ theme }) => theme.colors.backgrond_primary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 116}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo600};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter400};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(24)}px;

  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  width: 100%;

  margin: 64px 0;
`;

export const Footer = styled.View`
  width: 100%;

`;
