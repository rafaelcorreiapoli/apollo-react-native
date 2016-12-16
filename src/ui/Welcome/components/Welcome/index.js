import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import {
  withNavigation
} from '@exponent/ex-navigation'
import Router from '@router'
@withNavigation
export default class Welcome extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
    this._handlePress = this._handlePress.bind(this)
  }

  _handlePress() {
    this.props.navigator.push(Router.getRoute('login'))
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome</Text>
        <Button
          title="Begin"
          color="pink"
          onPress={this._handlePress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    textAlign: 'center',
    fontSize: 30
  }
})
