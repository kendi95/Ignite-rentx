import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color?: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  border-radius: 8px;

  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${
    ({ color, theme }) => color ? color : theme.colors.main
  };
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
`;