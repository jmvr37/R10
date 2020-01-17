/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {component} from 'react';
import AboutContainer from './screens/About';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';
// import RootStackNavigation from "../js/navigation/RootStackNavigation";


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
         {/* <View>
            <Image source={require("../js/assets/images/r10_logo.png")} />
        </View> */}
        <View>
          <AboutContainer />
        {/* <RootStackNavigation /> */}
        </View>
      </ApolloProvider>
    
  );

};

export default App;
