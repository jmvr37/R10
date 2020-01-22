import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

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
import ScheduleContainer from './ScheduleContainer';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;
    console.log(data);
    return (
      <Text>hello</Text>
      // <View>
      //   {data.map(item => {
      //     return <ScheduleContainer item={item} />;
      //   })}
      // </View>
    );
  }
}

Schedule.PropTypes = {
  data: PropTypes.array.isRequired,
};

export default Schedule;
