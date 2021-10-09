import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const Button: FC<Props> = ({ 
  title, 
  color,
  isDisabled = false, 
  isLoading = false,
  ...rest 
}) => {
  const { colors } = useTheme();

  return (
    <Container 
      { ...rest } 
      color={color}
      enabled={!isDisabled}
      style={{
        opacity: isDisabled ? 0.6 : 1
      }}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );

}