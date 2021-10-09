import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Animated, { 
  Extrapolate, 
  interpolate, 
  useAnimatedScrollHandler, 
  useAnimatedStyle, 
  useSharedValue 
} from 'react-native-reanimated';

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

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 100],
        Extrapolate.CLAMP
      ),
    }
  });

  const imageSliderStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 200],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  });

  return (
    <Container>
      <StatusBar 
        barStyle="dark-content" 
        translucent
        backgroundColor="transparent"
      />

      <Animated.View
        style={[headerStyleAnimation]}
      >
        <Header>
          <BackButton onPress={goBack} />
        </Header>

        <CarImages
          style={[imageSliderStyleAnimation]}
        >
          <ImageSlider 
            imageURLs={car.photos} 
          />
        </CarImages>

      </Animated.View>

      <Content
        onScroll={scrollHandler}
        scrollEventThrottle={11}
      >
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
          {car.about}
          {car.about}
          {car.about}
          {car.about}
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
    </Container>
  );

}