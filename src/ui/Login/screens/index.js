import React, {
  Component,
} from 'react'

import ScreenContent from '@ui/Shared/ScreenContent'
import Login from '../containers/Login'

export default class LoginScreen extends Component {
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
      <ScreenContent>
        <Login/>
      </ScreenContent>
    )
  }

}
