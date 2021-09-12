import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
  isSelected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgrond_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 324px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo600};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(28)}px;

  margin-top: 16px;
  margin-left: 8px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  font-family: ${({ theme }) => theme.fonts.inter500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  margin-top: 8px;

  ${({ isSelected, theme }) => !isSelected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text};
    padding-bottom: 4px;
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false
})`

`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgrond_secondary};
  
  padding: 24px 24px ${getBottomSpace() + 16}px;
`;

