/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import styles from './styles';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;

    return (
      <>
        <ScrollView style={styles.aboutPage}>
          <View>
            <Image
              style={styles.aboutImage}
              source={require('../../assets/images/r10_logo.png')}
            />
          </View>
          <Text style={styles.text}>
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

          <View>
            {data.map(({id, title, description}) => {
              <View key={id}>
                <Text>{title}</Text>
                <Text>{description}</Text>
              </View>;
              {
                /* <CollapseBody>
                <Text>{description}</Text>
               </CollapseBody> */
              }
            })}
          </View>
        </ScrollView>
      </>
    );
  }
}

About.PropTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
