import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import '../configs/global-navigator';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetail } from '../screens/SchedulingDetail';
import { SchedulingComplete } from '../screens/SchedulingComplete';

interface Props {}

const { Navigator, Screen, Group } = createNativeStackNavigator();

export const Routes: FC<Props> = () => {

  return (
    <NavigationContainer>
      <Navigator 
        initialRouteName="Splash"
        defaultScreenOptions={{
          gestureEnabled: false
        }}
        screenOptions={{ 
          headerShown: false,
        }}
      >
        <Group>
          <Screen name="Splash" component={Splash} />
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