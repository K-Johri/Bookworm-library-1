import React, { Component } from 'react';
import { Text, View ,Button,TouchableOpacity} from 'react-native';

export default class Fantasy extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Fantasy</Text>

         <TouchableOpacity
            onPress={() => this.props.navigation.navigate('F1')}>
            <Text>Fantasy Books</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
