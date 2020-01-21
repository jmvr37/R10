import React, {useEffect, useState} from 'react';
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
import MapsContainer from './MapsContainer';

class Maps extends React.Component {
  render() {
    // return(
    //     <View>
    //     <Text> this text is inside the schedule page yes </Text>
    //     </View>

    // );
    return <MapsContainer />;
  }
}

export default Maps;
