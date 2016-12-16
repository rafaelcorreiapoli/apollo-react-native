import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  StyleSheet,
  Navigator,
} from 'react-native'
import Restaurantes from '@ui/Restaurantes/screens';
import Promocoes from '@ui/Promocoes/screens';
import Login from '@ui/Login/screens';
import DrawerLayout from '@ui/DrawerLayout'
import GuestLayout from '@ui/GuestLayout'

export default class App extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key="root">
          {/* <Scene key="guest" component={GuestLayout} hideNavBar> */}
            <Scene key="login" component={Login} hideNavBar />
          {/* </Scene> */}
          <Scene key="drawer" component={DrawerLayout}>
            <Scene key="main" tabs>
              <Scene key="restaurantes" title='teste' component={Restaurantes} title="Restaurantes"/>
              <Scene key="promocoes" component={Promocoes} title="Promoções" />
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
