import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color?: string;
  marginBottom?: number;
}

interface TitleProps {
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

  margin-bottom: ${
    ({ marginBottom }) => marginBottom
      ? marginBottom
      : 0 
  }px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.inter500};
  color: ${
    ({ color, theme }) => color 
    ? color
    : theme.colors.shape
  };
  font-size: ${RFValue(16)}px;
`;