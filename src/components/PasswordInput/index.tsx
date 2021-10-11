import React, { FC, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  IconInputContainer,
  LineFocused,
  InputContainer,
  IconButton
} from './styles';

import { Input } from '../Input';

interface Props extends TextInputProps {
  iconName?: React.ComponentProps<typeof Feather>['name'];
  error?: boolean;
}

export const PasswordInput: FC<Props> = ({ 
  iconName, 
  error = false, 
  ...rest 
}) => {
  const { colors } = useTheme();

  const [isHide, setIsHide] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  function onBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(false);
  }

  function onFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(true);
  }

  function handleShowPassword() {
    setIsHide(oldIsHide => !oldIsHide);
  }

  return (
    <Container>
      <IconInputContainer>
        
        <InputContainer>
          <Input 
            iconName="lock" 
            secureTextEntry={isHide}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest} 
          />

          <IconButton 
            onPress={handleShowPassword}
          >
            {isHide
              ? (
                <Feather 
                  name="eye" 
                  size={20}
                  color={colors.text}
                />
              )
              : (
                <Feather 
                  name="eye-off" 
                  size={20}
                  color={colors.text}
                />
              )
            }
          </IconButton>
        </InputContainer>
      </IconInputContainer>

      {isFocused && <LineFocused />} 
    </Container>
  )

}