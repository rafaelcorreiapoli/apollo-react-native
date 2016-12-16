import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

export default class Header extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View styl={styles.container}>
        <Text>Rafael Ribeiro Correia</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
})
