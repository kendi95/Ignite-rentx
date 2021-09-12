import React, { FC } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';

import LogoSVG from '../../assets/logo_background_gray.svg';
import DoneSVG from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';

interface Props {}

export const SchedulingComplete: FC<Props> = () => {
  const { width } = useWindowDimensions();
  const { dispatch } = useNavigation();

  function handleResetNavigation() {
    dispatch(
      StackActions.popToTop()
    );
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content" 
        translucent
        backgroundColor="transparent"
      />

      <LogoSVG width={width} />

      <Content>
        <DoneSVG width={80} height={80} />

        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton 
          title="OK" 
          onPress={handleResetNavigation}
        />
      </Footer>
    </Container>
  );

}