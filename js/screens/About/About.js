/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const About = () => {
  return (
    <>
      <View>
        <Text>R10</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: '50%',
    height: '50%',
  },
  box1: {
    backgroundColor: 'powderblue',
  },
  box2: {
    backgroundColor: 'skyblue',
  },
  box3: {
    backgroundColor: 'steelblue',
  },
  box4: {
    backgroundColor: 'midnightblue',
  },
});

export default About;
