import React from 'react';
import {
  createStackNavigator
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import About from '../screens/About/About';
import Schedule from '../screens/Schedule/Schedule';

const AboutStack = createStackNavigator({
  About: {screen: About}
});

const ScheduleStack = createStackNavigator({
  Schedule: {router: Schedule}
})

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(AboutStack);

