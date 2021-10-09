import React, { FC, useEffect } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import Animated, { 
  Extrapolate, 
  interpolate, 
  runOnJS, 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming ,
  runOnUI
} from 'react-native-reanimated';

import BrandSVG from '../../assets/brand.svg';
import LogoSVG from '../../assets/logo.svg';

import {
  Container
} from './styles';

interface Props {}

export const Splash: FC<Props> = () => {
  const { dispatch } = useNavigation();

  function onNavigateToHome() {
    dispatch(
      StackActions.replace('Home')
    );
  }

  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 50],
        [1, 0],
      ),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50],
        [0, .3, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  });

  useEffect(() => {
    splashAnimation.value = withTiming(
      50, 
      {
        duration: 1000
      },
      () => {
        runOnJS(onNavigateToHome)();
      }
    );
  }, []);

  return (
    <Container>
     <Animated.View style={[brandStyle, { position: 'absolute' }]}>
       <BrandSVG width={80} height={50} />
     </Animated.View>

     <Animated.View style={[logoStyle, { position: 'absolute' }]}>
       <LogoSVG width={180} height={20} />
     </Animated.View>
    </Container>
  );

}