import React, {Component} from 'react';
import MapView from 'react-native-maps';

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

export default class App extends Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 49.246292,
          longitude: -123.116226,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
    );
  }
}

// class Maps extends React.Component {
//   render() {
//     // return(
//     //     <View>
//     //     <Text> this text is inside the schedule page yes </Text>
//     //     </View>

//     // );
//     return <MapsContainer />;
//   }
// }

// export default Maps;
