import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgrond_primary};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 112px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.inter400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CardList = styled(FlatList)
  .attrs({
    contentContainerStyle: {
      padding: 24
    },
    showsVerticalScrollIndicator: false
  })``;