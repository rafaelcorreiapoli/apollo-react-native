import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  ACCENT_COLOR
} from '@resources/colors'

export default class Header extends Component {

  static defaultProps = {}

  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      name
    } = this.props
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: ACCENT_COLOR,
    height: 100
  }
})
