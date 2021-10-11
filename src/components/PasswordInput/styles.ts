import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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
  margin-top: -8px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const IconButton = styled(RectButton)`
  width: 32px;
  height: 32px;
  border-radius: 32px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 16px;
  top: 12px;
`;