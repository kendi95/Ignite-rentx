import React, { FC, useState, useEffect } from 'react';
import { ActivityIndicator, StatusBar, BackHandler } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { 
  useSharedValue, 
  useAnimatedStyle, 
  interpolate, 
  Extrapolate,
  withTiming,
  runOnJS,
  Easing
} from 'react-native-reanimated';

import {
  Container,
  HeaderContent,
  Header,
  TotalCars,
  CardList,
  MyCarsButton,
  MyCarButtonContainer
} from './styles';
import { Card } from '../../components/Card';
import { MyCarsModal } from '../../components/MyCarsModal';

import LogoSVG from '../../assets/logo.svg';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';


interface Props {}

export const Home: FC<Props> = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const myCarAnimation = useSharedValue(50);

  const myCarStyleAnimationOpen = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        myCarAnimation.value,
        [50, 0],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  });

  const myCarStyleAnimationClose = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        myCarAnimation.value,
        [0, 50],
        [0, 1],
        Extrapolate.CLAMP
      )
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [openModal, setOpenModal] = useState(false);

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

  function handleOpenModal() {
    setOpenModal(openModal => !openModal);
  }

  function handleOpenOrHideMyCars() {
    if (!openModal) {
      myCarAnimation.value = withTiming(0, {
        duration: 750,
        easing: Easing.linear
      }, () => {
        runOnJS(handleOpenModal)();
      });
      return;
    }

    handleOpenModal();

    setTimeout(() => {
      myCarAnimation.value = withTiming(50, {
        duration: 750,
        easing: Easing.linear
      });
    }, 500);
  }

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <>
      <Container>
        <StatusBar 
          barStyle="light-content" 
          translucent
          backgroundColor="transparent"
        />

        <Header>
          <HeaderContent>
            <LogoSVG width={RFValue(108)} height={RFValue(12)} />

            {!isLoading && (
              <TotalCars>Total de {cars.length} carros</TotalCars>
            )}
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

        <MyCarButtonContainer style={[myCarStyleAnimationOpen, myCarStyleAnimationClose]}>
          <MyCarsButton
            onPress={handleOpenOrHideMyCars}
          >
            <Ionicons name="car" size={28} color={colors.shape} />
          </MyCarsButton>
        </MyCarButtonContainer>

      </Container>
      <MyCarsModal 
        visible={openModal}
        onClose={handleOpenOrHideMyCars}
      />
    </>
  );

}