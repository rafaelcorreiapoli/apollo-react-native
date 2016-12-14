import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Restaurantes from '@ui/Restaurantes/screens';
import Promocoes from '@ui/Promocoes/screens';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="restaurantes" component={Restaurantes} title="Restaurantes" initial={true} />
          <Scene key="promocoes" component={Promocoes} title="Promoções" />
        </Scene>
      </Router>
    )
  }
}
