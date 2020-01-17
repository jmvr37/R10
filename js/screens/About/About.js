/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  Image,
  CollapseHeader,
  Collapse,
  CollapseBody,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const About = (props) => {
   
    
    const { data } = this.props;
  return (
    <>
      <ScrollView>
        <Text h1> </Text>
        <View>
        {/* <Image source={require("../js/assets/images/r10_logo.png")} /> */}
        </View>
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>

        <View>
          <Header>Date Venue</Header>
          <Text>
            The R10 conference will take place on Tuesday, June 27, 2020 in
            Vancouver, BC.
          </Text>
        </View>
        {data.map(({ id, title, description })=>{
           <Collapse key={id}>
               <CollapseHeader>
               <Text>{title}</Text>
               </CollapseHeader>
               <CollapseBody>
                <Text>{description}</Text>
               </CollapseBody>
               </Collapse>


        })}
        
      </ScrollView>
    </>
  );

};

export default About;
