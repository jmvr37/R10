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
      <ScrollView>
        <Header>
          <Text h1> R10 </Text>
          <Text>
            R10 is a conference that focuses on just about any topic related to
            dev
          </Text>
        </Header>
      </ScrollView>
      <View>
        <Header>Date Venue</Header>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2020 in
          Vancouver, BC.
        </Text>
      </View>
      <View>
        <Header>Code of Conduct</Header>
      </View>
    </>
  );
};

export default About;
