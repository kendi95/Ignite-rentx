import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgrond_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 220px;

  background-color: ${({ theme }) => theme.colors.header};

  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo600};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(28)}px;

  margin-top: 16px;
  margin-left: 8px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;

  margin-top: 16px;
  margin-left: 8px;
`;

export const ScheduleDoneContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 24px;
`;

export const ScheduleDoneText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(14)}px;
`;

export const ScheduleDoneNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo600};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const CloseButton = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
`;

export const CarWrapper = styled.View`
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 16px;
  margin-top: -28px;
  margin-bottom: 16px;

  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-top-width: 2px;
  border-top-color: ${({ theme }) => theme.colors.backgrond_primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.backgrond_secondary};
`;

export const CarFooterTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter400};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(12)}px;
`;

