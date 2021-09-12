import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetail } from '../screens/SchedulingDetail';
import { SchedulingComplete } from '../screens/SchedulingComplete';

interface Props {}

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes: FC<Props> = () => {

  return (
    <NavigationContainer>
      <Navigator 
        defaultScreenOptions={{
          gestureEnabled: false
        }}
        screenOptions={{ 
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
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
      </Navigator>
    </NavigationContainer>
  );

}