/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {component} from 'react';
import AboutContainer from '../js/screens/About/index';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../js/config/api';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Title,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  
  return (
    
      <ApolloProvider client={client}>

         <View>
            <Image source={require("../js/assets/images/r10_logo.png")} />
        </View>
        <AboutContainer />
      </ApolloProvider>
    
  );

};




export default App;
