import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

export const Button: FC<Props> = ({ title, color, ...rest }) => {

  return (
    <Container { ...rest } color={color}>
      <Title>{title}</Title>
    </Container>
  );

}