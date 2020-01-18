import React from 'react';
import {
  createStackNavigator
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import About from '../screens/About/About';


const AboutStack = createStackNavigator({
  About: {router: About}
});

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(AboutStack);

