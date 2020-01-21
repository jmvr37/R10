import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import About from '../screens/About/About';
import Schedule from '../screens/Schedule/Schedule';

const AboutStack = createStackNavigator({
  About: {
    About: About,
  },
});

const ScheduleStack = createStackNavigator({
  Schedule: {
    Schedule: Schedule,
  },
});

// Dedicated stacks for Schedule and Faves will go here too!
// export default createBottomTabNavigator(AboutStack);
// export createbottomnavition

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    About: AboutStack,
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
