import React, { FC } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { AcessoryIcon } from '../../components/AcessoryIcon';
import { Button } from '../../components/Button';

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

import { CarDTO } from '../../dtos/CarDTO';

interface Props {}

interface Params {
  car: CarDTO;
}

export const CarDetails: FC<Props> = () => {
  const { navigate, goBack } = useNavigation();
  const { colors } = useTheme();

  const { car } = useRoute().params as Params;

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

      {car.id ? (
        <>
          <CarImages>
            <ImageSlider 
              imageURLs={car.photos} 
            />
          </CarImages>

          <Content>
            <Details>
              <Description>
                <Brand>{car.brand}</Brand>
                <Name>{car.name}</Name>
              </Description>
              <Rent>
                <Period>{car.rent.period}</Period>
                <Price>R$ {car.rent.price}</Price>
              </Rent>
            </Details>

            <Acessories>
              {car.accessories.map((acessory, index) => (
                <Acessory 
                  key={index}
                  name={acessory.name} 
                  icon={() => <AcessoryIcon type={acessory.type} />} 
                />
              ))}
            </Acessories>

            <About>
              {car.about}
            </About>

          </Content>

          <Footer>
            <Button 
              title="Escolher período do aluguel" 
              onPress={() => navigate(
                'Scheduling' as never,
                { car } as never
                )
              }
            />
          </Footer>
        </>
      ) : (
        <ActivityIndicator 
          color={colors.header} 
          size="large" 
          style={{ flex: 1 }}
        /> 
      )}

    </Container>
  );

}