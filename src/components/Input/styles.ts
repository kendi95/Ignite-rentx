import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

export const Container = styled.View`
  width: 100%;
  
  align-items: center;
  justify-content: center;
  
  margin-bottom: 8px;
`;

export const IconInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: ${({ theme }) => theme.colors.backgrond_secondary};
  margin-right: 2px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgrond_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.inter400};
  font-size: ${RFValue(14)}px;
  padding: 14px 24px;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const LineFocused = styled.View`
  width: 96%;
  height: 2px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.main};
  margin-top: -2px;
`;