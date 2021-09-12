import React, { FC, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  HeaderContent,
  Header,
  TotalCars,
  CardList
} from './styles';

import LogoSVG from '../../assets/logo.svg';
import { Card } from '../../components/Card';

interface Props {}

type Car = {
  id: number;
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

export const Home: FC<Props> = () => {
  const { navigate } = useNavigation();

  const [cars, setCars] = useState<Car[]>([
    {
      id: 1,
      brand: 'audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 100,
      },
      thumbnail: 'https://e7.pngegg.com/pngimages/269/468/png-clipart-2018-audi-a5-2-0t-premium-hatchback-audi-sportback-concept-car-2018-audi-a5-coupe-audi-compact-car-sedan.png'
    },
    {
      id: 2,
      brand: 'audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 100,
      },
      thumbnail: 'https://e7.pngegg.com/pngimages/269/468/png-clipart-2018-audi-a5-2-0t-premium-hatchback-audi-sportback-concept-car-2018-audi-a5-coupe-audi-compact-car-sedan.png'
    },
    {
      id: 3,
      brand: 'audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 100,
      },
      thumbnail: 'https://e7.pngegg.com/pngimages/269/468/png-clipart-2018-audi-a5-2-0t-premium-hatchback-audi-sportback-concept-car-2018-audi-a5-coupe-audi-compact-car-sedan.png'
    },
    {
      id: 4,
      brand: 'audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 100,
      },
      thumbnail: 'https://e7.pngegg.com/pngimages/269/468/png-clipart-2018-audi-a5-2-0t-premium-hatchback-audi-sportback-concept-car-2018-audi-a5-coupe-audi-compact-car-sedan.png'
    },
    {
      id: 5,
      brand: 'audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 100,
      },
      thumbnail: 'https://e7.pngegg.com/pngimages/269/468/png-clipart-2018-audi-a5-2-0t-premium-hatchback-audi-sportback-concept-car-2018-audi-a5-coupe-audi-compact-car-sedan.png'
    },
    {
      id: 6,
      brand: 'audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 100,
      },
      thumbnail: 'https://e7.pngegg.com/pngimages/269/468/png-clipart-2018-audi-a5-2-0t-premium-hatchback-audi-sportback-concept-car-2018-audi-a5-coupe-audi-compact-car-sedan.png'
    },
  ]);

  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <LogoSVG width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CardList 
        data={cars}
        keyExtractor={(item: Car) => String(item.id)}
        renderItem={({ item }) => (
          <Card 
            data={item} 
            onPress={() => navigate('CarDetails' as never)} 
          />
        )}
      />
    </Container>
  );

}