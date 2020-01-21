import React, {Component} from 'react';
import Schedule from './Schedule';
import {useQuery} from '@apollo/react-hooks';
import {Query} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

class FavesContainer extends React.Component {
  render() {
    return <Text> this text is inside the faves container </Text>;
  }
}

export default FavesContainer;
