// logic fetching data from the API
import React from 'react';
import About from './About';
import { Query } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
  } from 'react-native';

const ALL_CONDUCTS = gql `
    query{
        allConducts{
            id
            title
            description
        }
    }
`;

const AboutContainer = () => {
  return (
  <ScrollView query={ALL_CONDUCTS}>
      {({ loading, error, data }) =>{
          if (loading)
         return (
             <View>
                 <Text>hello</Text>
             </View>
         );
          if (error) return <Text> Error </Text>;
          return <About data={data.allConducts} />
      }}
  </ScrollView>
  )
  
};
export default AboutContainer;
