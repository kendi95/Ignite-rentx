import React, { FC } from 'react';
import { SvgProps } from 'react-native-svg';

import {
  Container,
  Name
} from './styles';

interface Props {
  name: string;
  icon: FC<SvgProps>;
}

export const Acessory: FC<Props> = ({ name, icon: Icon }) => {

  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );

}