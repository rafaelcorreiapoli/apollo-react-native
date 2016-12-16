import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'


export default class ScreenContent extends React.Component {
  static propTypes = {
    padStatusBar: PropTypes.bool,
    style: PropTypes.number,
  }
  static defaultProps = {
    padStatusBar: false
  }
  render() {
      return (
        <View style={[styles.container, this.props.padStatusBar && styles.padStatusBar, this.props.style]}>
          {this.props.children}
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padStatusBar: {
    paddingTop: 20,
  }
})
