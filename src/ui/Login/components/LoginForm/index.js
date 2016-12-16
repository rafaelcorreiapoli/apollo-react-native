import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Form extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Login Form</Text>
        <Button
          title="Login"
          color="#cb13de"
          onPress={() => Actions.drawer()}
        />
      </View>
    );
  }

}
