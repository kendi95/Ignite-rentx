import React, { FC, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import {
  Container,
  HeaderContent,
  Header,
  TotalCars,
  CardList,
  LoadContainer
} from './styles';
import LogoSVG from '../../assets/logo.svg';
import { Card } from '../../components/Card';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

interface Props {}

export const Home: FC<Props> = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState<CarDTO[]>([]);

  async function getCars() {
    try {
      setIsLoading(true);
      setTimeout(async () => {
        const response = await api.get<CarDTO[]>('/cars');
        const { data } = response;
        setCars(data);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(() => {
    getCars();
  });

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

          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      {isLoading 
        ? (
          <ActivityIndicator 
            color={colors.header} 
            size="large" 
            style={{ flex: 1 }}
          /> 
        )
        : (
          <CardList 
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card 
                data={item} 
                onPress={() => navigate('CarDetails' as never, { car: item } as never)} 
              />
            )}
          />
        )
      }

    </Container>
  );

}