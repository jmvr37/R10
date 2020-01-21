import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import About from '../screens/About';
import Schedule from '../screens/Schedule';
import Faves from '../screens/Faves';

const AboutStack = createStackNavigator({
  About: About,
});

const ScheduleStack = createStackNavigator({
  Schedule: Schedule,
});

const FavesStack = createStackNavigator({
  Faves: Faves,
});

// Dedicated stacks for Schedule and Faves will go here too!
// export default createBottomTabNavigator(AboutStack);
// export createbottomnavition

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    About: AboutStack,
    Faves: FavesStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: 'black',
      },
    },
  },
);
