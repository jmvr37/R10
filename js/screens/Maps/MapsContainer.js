import React, {Component} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Query} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

class MapsContainer extends React.Component {
  render() {
    return <Text> this text is inside the maps container </Text>;
  }
}

export default MapsContainer;
