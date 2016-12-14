import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';

import { DefaultRenderer } from 'react-native-router-flux'

export default class GuestLayout extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DefaultRenderer navigationState={this.props.children[0]} onNavigate={this.props.onNavigate} />
      </View>
    );
  }

}
