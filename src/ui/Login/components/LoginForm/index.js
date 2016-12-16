import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Form extends Component {
  static defaultProps = {

  }

  static propTypes = {
    loginWithPassword: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      loginWithPassword
    } = this.props

    return (
      <View style={{flex: 1}}>
        <Text>Login Form</Text>
        <Button
          title="Login"
          color="#cb13de"
          onPress={loginWithPassword}
        />
      </View>
    )
  }

}
