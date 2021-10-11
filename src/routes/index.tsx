import React, { FC, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';

import '../configs/global-navigator';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Signin } from '../screens/Signin';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetail } from '../screens/SchedulingDetail';
import { SchedulingComplete } from '../screens/SchedulingComplete';

interface Props {}

const { Navigator, Screen, Group } = createNativeStackNavigator();

export const Routes: FC<Props> = () => {

  useEffect(() => {
    async function setOrientation() {
      await ScreenOrientation.unlockAsync();
    }

    setOrientation();
  }, []);

  return (
    <NavigationContainer>
      <Navigator 
        initialRouteName="Signin"
        defaultScreenOptions={{
          gestureEnabled: false
        }}
        screenOptions={{ 
          headerShown: false,
          orientation: "portrait",
        }}
      >
        <Group>
          <Screen name="Splash" component={Splash} />
          <Screen name="Signin" component={Signin} />
          <Screen 
            name="Home" 
            component={Home} 
            options={{
              gestureEnabled: false
            }}
          />
          <Screen 
            name="CarDetails" 
            component={CarDetails}
          />
          <Screen name="Scheduling" component={Scheduling} />
          <Screen 
            name="SchedulingDetail" 
            component={SchedulingDetail} 
          />
          <Screen 
            name="SchedulingComplete" 
            component={SchedulingComplete} 
          />
        </Group>
      </Navigator>
    </NavigationContainer>
  );

}