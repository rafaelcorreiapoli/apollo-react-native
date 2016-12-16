import React, {
  Component,
} from 'react'
import {
  View,
} from 'react-native'

import {
  StackNavigation,
  withNavigation
} from '@exponent/ex-navigation'

@withNavigation
export default class Main extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <StackNavigation
        id="guest"
        initialRoute={'welcome'}
      />
    )
  }
}
