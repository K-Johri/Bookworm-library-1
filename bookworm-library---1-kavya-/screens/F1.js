import React, { Component } from 'react';
import { Text, View ,Button,TouchableOpacity} from 'react-native';

export default class F1 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Fantasy titles and description</Text>

        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Genre')}>
            <Text>Back to Genre screen</Text>
          </TouchableOpacity>

         <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Fantasy')}>
            <Text>Back to Fantasy titles</Text>
          </TouchableOpacity>
      </View>
    );
  }
}