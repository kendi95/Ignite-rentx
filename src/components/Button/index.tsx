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
  textColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  marginBottom?: number;
}

export const Button: FC<Props> = ({ 
  title, 
  color,
  textColor,
  marginBottom,
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
      marginBottom={marginBottom}
      style={{
        opacity: isDisabled ? 0.6 : 1
      }}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.shape} />
      ) : (
        <Title color={textColor}>{title}</Title>
      )}
    </Container>
  );

}