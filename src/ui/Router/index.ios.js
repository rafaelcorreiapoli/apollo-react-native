import React, { Component } from 'react'
import { Router, Scene, ActionConst } from 'react-native-router-flux'
import {
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Restaurantes from '@ui/Restaurantes/screens'
import Promocoes from '@ui/Promocoes/screens'
import Login from '@ui/Login/screens'
import DrawerLayout from '@ui/DrawerLayout'
import GuestLayout from '@ui/GuestLayout'
import { connect } from 'react-redux'
import { openDrawer } from '@ui/DrawerLayout/actions'

class RouterComponent extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key="root">
          <Scene key="guest" component={GuestLayout} hideNavBar>
            <Scene key="login"
              component={Login}
              hideNavBar
              initial
              type={ActionConst.RESET}
            />
          </Scene>
          <Scene key="drawer" component={DrawerLayout}>
            <Scene key="main" tabs >
              <Scene key="restaurantes"
                type={ActionConst.RESET}
                panHandlers={null}
                renderLeftButton={() => (
                  <TouchableOpacity
                    onPress={this.props.openDrawer}
                  >
                    <Icon name="ios-menu" size={24} color={'white'} />
                  </TouchableOpacity>
                )}
                component={Restaurantes}
                title="Restaurantes"
              />
              <Scene
                type={ActionConst.RESET}
                key="promocoes"
                component={Promocoes}
                title="Promoções"
              />
             </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#086086'
  },
  navTitle: {
    color: 'white'
  },
})

const mapDispatchToProps = dispatch => ({
  openDrawer() {
    dispatch(openDrawer())
  }
})

export default connect(null,mapDispatchToProps)(RouterComponent)
