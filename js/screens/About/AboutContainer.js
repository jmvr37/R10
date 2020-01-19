// logic fetching data from the API
import React, { Component } from "react";
import About from './About';
import { useQuery } from '@apollo/react-hooks';
import { Query } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
// import {Query} from '@apollo/react-components';
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


// const GET_DOGS = gql`
//   {
//     dogs {
//       id
//       breed
//     }
//   }
// `;
const  AboutContainer = () => {
  const { loading, error, data } = useQuery(ALL_CONDUCTS);
    
      // return(
      //   <Text> About container</Text>
      // )
      if (loading) return (
      <Text>Loading...</Text>)
      if (error) return (
      <Text>Error!</Text>);
    
      return (
        <ScrollView>
        <About data={data.allConducts} />
        </ScrollView>
      );
      
  }


export default AboutContainer;



// render(){
//     return (
//         <ScrollView query={ALL_CONDUCTS}>
//             {({ loading, error, data }) => {
//           if (loading)
//          return (
//              <View>
//                  <Text>hello</Text>
//              </View>
//          );
//           if (error) return <Text> Error </Text>;
//           return <About data={data.allConducts} />
//         return <Text> Hello </Text>
//       }}
//     </ScrollView> 
//     )
// }


// const AboutContainer = () => {
//     const ALL_CONDUCTS = gql`
//     {
//         allConducts{
//             id
//             title
//             description
//         }
//     }
// `
// const { loading, error, data } = useQuery(ALL_CONDUCTS)

    
//       return (
//         <View query={ALL_CONDUCTS}>
//           {({ loading, error, data }) => {
//             if (loading) return <Text> loading </Text>
//             if (error) return <Text>Error</Text>;
//             return (
//             <About data={data.allConducts} />
//             );
//           }}
//         </View>
//       );
    
//   }


//   return (
//     <View
//       query={gql`
//         {
//           allConducts {
//             id
//             description
//             title
//           }
//         }
//       `}>
//         <Text>banana</Text>
//       {({loading, error, data}) => {
//         if (loading)
//           return <Text>Loading</Text>;
//         if (error) return <Text>Error :(</Text>;

//         // return <About allConducts={data.allConducts} />;
//         return <Text>wtf</Text>
//       }}
//     </View>
//   );
// }