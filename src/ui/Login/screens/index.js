import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  Text
} from 'react-native';
import ScreenContent from '@ui/Shared/ScreenContent'
import Login from '../containers/Login'

export default class LoginScreen extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScreenContent>
        <Login/>
      </ScreenContent>
    );
  }

}
