import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet
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
      <View style={styles.container}>
        <Text style={styles.title}>My Awesome App</Text>
        <TextInput
          autoCapitalize="none"
          placeholder="Login"
          autoCorrect={false}
          style={styles.textInput}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          autoCorrect={false}
          style={styles.textInput}
        />
        <Button
          title="Login"
          color="#cb13de"
          onPress={loginWithPassword}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20
  },
  textInput: {
    height: 26,
    fontSize: 13,
    padding: 4,
    marginBottom: 10
  }
})
