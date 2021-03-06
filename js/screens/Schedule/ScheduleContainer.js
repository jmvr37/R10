import React, {Component} from 'react';
import Schedule from './Schedule';
import {useQuery} from '@apollo/react-hooks';
import {Query} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

const All_SESSIONS = gql`
  query {
    allSessions {
      id
      title
      location
      startTime
    }
  }
`;

const ScheduleContainer = () => {
  const {loading, error, data} = useQuery(All_SESSIONS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  return (
    <ScrollView>
      <Schedule data={data.allSessions} />
    </ScrollView>
  );
};

export default ScheduleContainer;
