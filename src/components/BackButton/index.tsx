import React, { FC } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
  Container
} from './styles';

interface Props extends BorderlessButtonProps {
  colorIcon?: string;
}

export const BackButton: FC<Props> = ({ colorIcon, ...rest }) => {
  const { colors }  = useTheme();

  return (
    <Container { ...rest }>
      <Feather 
        name="chevron-left" 
        size={24} 
        color={colorIcon ? colorIcon : colors.text}
      />
    </Container>
  );

}