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
import FavesContainer from './ScheduleContainer';

class Faves extends React.Component {
  render() {
    // return(
    //     <View>
    //     <Text> this text is inside the schedule page yes </Text>
    //     </View>

    // );
    return <FavesContainer />;
  }
}

export default Faves;
