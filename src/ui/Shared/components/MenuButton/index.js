import React, {
  Component,
  PropTypes,
} from 'react'

import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'
import {
  MENU_BUTTON_COLOR
} from '@resources/colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default class MenuButton extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="md-menu" color={MENU_BUTTON_COLOR} size={24} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})
