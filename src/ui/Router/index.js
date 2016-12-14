import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Restaurantes from '@ui/Restaurantes/screens';
import Promocoes from '@ui/Promocoes/screens';
import Login from '@ui/Login/screens';
import DrawerLayout from '@ui/DrawerLayout'
import GuestLayout from '@ui/GuestLayout'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" tabs>
          <Scene key="guest" component={GuestLayout} hideNavBar>
            <Scene key="login" component={Login} initial />
          </Scene>
          <Scene key="drawer" component={DrawerLayout}>
            <Scene key="main" tabs hideNavBar>
              <Scene key="promocoes" component={Promocoes} title="Promoções"  hideNavBar/>
              <Scene key="restaurantes" component={Restaurantes} title="Restaurantes" hideNavBar/>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}
