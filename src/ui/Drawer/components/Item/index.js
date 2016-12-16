import React, {
  Component,
  PropTypes,

} from 'react'

import {
  View,
  Text
} from 'react-native'

export default class Item extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      label
    } = this.props

    return (
      <View>
        <Text>{label}</Text>
      </View>
    )
  }

}
