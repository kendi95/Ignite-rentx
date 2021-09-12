import React, { FC } from 'react';
import { StatusBar } from 'react-native';
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
  About,
  Acessories,
  Footer
} from './styles';
import { Button } from '../../components/Button';

interface Props {}

export const CarDetails: FC<Props> = () => {
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

        <About>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but 
          also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with 
          the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum.
        </About>

      </Content>

      <Footer>
        <Button 
          title="Escolher período do aluguel" 
          onPress={() => navigate('Scheduling' as never)}
        />
      </Footer>
    </Container>
  );

}