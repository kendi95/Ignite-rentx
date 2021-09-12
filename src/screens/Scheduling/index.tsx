import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native'; 

import ArrowSVG from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

interface Props {}

export const Scheduling: FC<Props> = () => {
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();

  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButton 
          onPress={goBack} 
          colorIcon={colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue isSelected={true}>14/05/2021</DateValue>
          </DateInfo>

          <ArrowSVG />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue isSelected={true}>14/05/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button 
          title="Confirmar" 
          onPress={() => navigate('SchedulingDetail' as never)}    
        />
      </Footer>
    </Container>
  );

}