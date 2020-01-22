import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';

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
      <ScrollView>
        <View>
          <Text>{data.title}</Text>
          <Text>{data.location}</Text>
        </View>
        {/* <View>
          {data.map(item => {
            return <ScheduleContainer item={item} />;
          })}
        </View> */}
      </ScrollView>
    );
  }
}

Schedule.propTypes = {
  data: propTypes.array.isRequired,
};

export default Schedule;

{
  /* <View>
        {data.map(item => {
          return <ScheduleContainer item={item} />;
        })}
      </View> */
}
