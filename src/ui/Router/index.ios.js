import React, {
  Component,
  PropTypes,
} from 'react'
import {
  View,
  ActivityIndicator,
  Text
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
    const rootNavigator = this.props.navigation.getNavigator('root')

    if (isLoggedIn(nextProps.currentUser) && !isLoggedIn(this.props.currentUser)) {
      rootNavigator.replace(Router.getRoute('main'))
    } else if (!isLoggedIn(nextProps.currentUser) && isLoggedIn(this.props.currentUser)) {
      rootNavigator.replace(Router.getRoute('login'))
    }
  }


  _getInitialRoute() {
    if (isLoggedIn(this.props.currentUser)) {
      return 'main'
    }

    return 'login'
  }

  render() {
    const {
      loading
    } = this.props
    return (
      <View style={{flex: 1}}>
        <StackNavigation
          id="root"
          initialRoute={this._getInitialRoute()}
        />
        {
          loading &&
          <LoadingOverlay />
        }

      </View>

    )
  }
}
