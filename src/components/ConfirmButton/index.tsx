import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export const ConfirmButton: FC<Props> = ({ title, ...rest }) => {

  return (
    <Container {...rest} >
      <Title>{title}</Title>
    </Container>
  );

}