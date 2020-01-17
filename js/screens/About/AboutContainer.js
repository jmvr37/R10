// logic fetching data from the API
import React from 'react';
import About from './About';
// import { Query } from "react-apollo";
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
  <View query={ALL_CONDUCTS}>
      {({ loading, error, data }) =>{
          if (loading)
         return (
             <View>
                 <Text>hi</Text>
             </View>
         );
          if (error) return <Text> Error </Text>;
          return <About data={data.allConducts} />
      }}
  </View>
  )
  
};
export default AboutContainer;
