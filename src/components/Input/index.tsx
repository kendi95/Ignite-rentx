import React, { FC, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  IconInputContainer,
  IconContainer,
  InputText,
  LineFocused,
} from './styles';


interface Props extends TextInputProps {
  iconName?: React.ComponentProps<typeof Feather>['name'];
  error?: boolean;
  value?: string;
}

export const Input: FC<Props> = ({ 
  iconName, 
  error = false, 
  secureTextEntry = false, 
  value = null,
  onBlur,
  onFocus,
  ...rest 
}) => {
  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  function onBlurChange(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(false);
    onBlur;
  }

  function onFocusChange(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(true);
    onFocus;
  }


  return (
    <Container>
      <IconInputContainer>
        <IconContainer>
          <Feather 
            name={iconName}
            size={24}
            color={value || isFocused ? colors.main : colors.text_detail}
          />
        </IconContainer>
        
        <InputText 
          secureTextEntry={secureTextEntry} 
          {...rest} 
          onFocus={onFocusChange}
          onBlur={onBlurChange}
        />
      </IconInputContainer>

      {isFocused && <LineFocused />} 
    </Container>
  )

}