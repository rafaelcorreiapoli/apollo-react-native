import React, {
  Component,
} from 'react'
import {
  StyleSheet
} from 'react-native'
import ScreenContent from '@ui/Shared/ScreenContent'
import Welcome from '../components/Welcome'

export default class WelcomeScreen extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  }
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ScreenContent padStatusBar style={styles.container}>
        <Welcome/>
      </ScreenContent>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9ad7fe'
  }
})
