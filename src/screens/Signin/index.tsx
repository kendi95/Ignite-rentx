import React, { FC, useState } from 'react';
import { 
  StatusBar, 
  KeyboardAvoidingView, 
  Platform,
  Keyboard,
  TouchableWithoutFeedback 
} from 'react-native';
import { useTheme } from 'styled-components';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Footer,
  Form
} from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';


interface Props {}

export const Signin: FC<Props> = () => {
  const { colors } = useTheme();

  const [loading, setLoading] = useState(false);
  const [hasEmail, setHasEmail] = useState(false);
  const [hasPass, setHasPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignin() {
    try {
      if (!email || !password) {
        setHasEmail(Boolean(!email));
        setHasPass(Boolean(!password));
        return;
      }

      if (!email.includes('@')) {
        setHasEmail(Boolean(email));
        return;
      }

      setHasEmail(Boolean(!email));
      setHasPass(Boolean(!password));

    } catch (error) {
      
    }
  }

  function onChange(text: string) {
    if (!email) {
      setHasEmail(Boolean(email));
    }

    setEmail(text);
  }

  function onChangePassword(text: string) {
    if (!password) {
      setHasPass(Boolean(password));
      // return;
    }

    setPassword(text);
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'} 
      enabled
    >
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={colors.backgrond_primary} 
        translucent  
      />
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>
              Estamos {'\n'}
              quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar {'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input 
              iconName="mail" 
              placeholder="Seu email"
              placeholderTextColor={colors.text_detail}
              keyboardType="email-address"
              error={hasEmail}
              value={email}
              onChangeText={onChange}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <PasswordInput 
              iconName="lock" 
              placeholder="Sua senha"
              placeholderTextColor={colors.text_detail}
              error={hasPass}
              value={password}
              onChangeText={onChangePassword}
            />
          </Form>

          <Footer>
            <Button 
              title="Login" 
              onPress={handleSignin} 
              marginBottom={8}
            />

            <Button 
              title="Criar conta gratuita" 
              onPress={() => {}} 
              color={colors.backgrond_secondary}
              textColor={colors.text}
            />

          </Footer>
        </Container>
      </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
  );

}