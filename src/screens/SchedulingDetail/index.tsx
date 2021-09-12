import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import SpeedSVG from '../../assets/speed.svg';
import AccelerationSVG from '../../assets/acceleration.svg';
import ForceSVG from '../../assets/force.svg';
import GasolineSVG from '../../assets/gasoline.svg';
import ExchangeSVG from '../../assets/exchange.svg';
import PeopleSVG from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CaledarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetail,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';
import { Button } from '../../components/Button';

interface Props {}

export const SchedulingDetail: FC<Props> = () => {
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();

  return (
    <Container>
      <StatusBar 
        barStyle="dark-content" 
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButton onPress={goBack} />
      </Header>

      <CarImages>
        <ImageSlider 
          imageURLs={[
            'https://e7.pngegg.com/pngimages/269/468/png-clipart-2018-audi-a5-2-0t-premium-hatchback-audi-sportback-concept-car-2018-audi-a5-coupe-audi-compact-car-sedan.png'
          ]} 
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>R8</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380Km/h" icon={SpeedSVG} />
          <Acessory name="3.2s" icon={AccelerationSVG} />
          <Acessory name="800 HP" icon={ForceSVG} />
          <Acessory name="Gasolina" icon={GasolineSVG} />
          <Acessory name="Auto" icon={ExchangeSVG} />
          <Acessory name="2 pessoas" icon={PeopleSVG} />
        </Acessories>

        <RentalPeriod>
          <CaledarIcon>
            <Feather 
              name="calendar" 
              size={RFValue(24)}
              color={colors.shape}
            />
          </CaledarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/12/2021</DateValue>
          </DateInfo>

          <Feather 
            name="chevron-right" 
            size={RFValue(10)}
            color={colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>14/05/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetail>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetail>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
          title="Alugar agora"
          color={colors.success} 
          onPress={() => navigate('SchedulingComplete' as never)}
        />
      </Footer>
    </Container>
  );

}