import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    const {item} = this.props;

    return (
      <View>
        <TouchableOpacity onPress={this.toggleItem}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
        {this.state.expanded && <Text>{item.description}</Text>}
      </View>
    );
  }
}

export default ConductItem;
