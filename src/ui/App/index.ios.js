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
import Router from '@router'
import { connect } from 'react-redux'
import LoadingOverlay from '@ui/Shared/components/LoadingOverlay'


const mapStateToProps = state => ({
  currentUser: state.login,
  loading: state.login.get('loading')
})

const isLoggedIn = userState => {
  return userState.get('token')
}

const getInitialRoute = userState => {
  if (isLoggedIn(userState)) {
    return 'main'
  }
  return 'guest'
}

@withNavigation
@connect(mapStateToProps)
export default class Main extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    const {
      currentUser
    } = this.props
    const rootNavigator = this.props.navigation.getNavigator('root')

    if (isLoggedIn(nextProps.currentUser) && !isLoggedIn(currentUser)) {
      rootNavigator.replace(Router.getRoute('main'))
    } else if (!isLoggedIn(nextProps.currentUser) && isLoggedIn(currentUser)) {
      rootNavigator.replace(Router.getRoute('guest'))
    }
  }

  render() {
    const {
      loading,
      currentUser
    } = this.props
    return (
      <View style={{flex: 1}}>
        <StackNavigation
          id="root"
          initialRoute={getInitialRoute(currentUser)}
        />
        {
          loading &&
          <LoadingOverlay />
        }
      </View>
    )
  }
}
