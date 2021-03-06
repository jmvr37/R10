/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {component} from 'react';
import {AboutContainer} from './screens/About';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';
import {ScheduleContainer} from './screens/Schedule/index';
import RootStackNavigator from './navigation/RootStackNavigator';
// import {RootStackNavigator} from './navigation/RootStackNavigator';

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

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: '50%', height: '50%', resizeMode: 'contain'}}
            source={require('../js/assets/images/r10_logo.png')}
          />
        </View> */}

        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
