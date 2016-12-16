import React from 'react'
import {
  AppRegistry,
  Text,
  View,
} from 'react-native'
import RestaurantesScreen from '@ui/Restaurantes/screens'
import PromocoesScreen from '@ui/Promocoes/screens'
import LoginScreen from '@ui/Login/screens'

/**
 * If you're using Exponent, uncomment the line below to import Exponent
 * BEFORE importing `@exponent/ex-navigation`. This sets the status bar
 * offsets properly.
 */
// import Exponent from 'exponent';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation'

import {
  PRIMARY_COLOR,
  TITLE_COLOR
} from '@resources/colors'
/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
export const Router = createRouter(() => ({
  restaurantes: () => RestaurantesScreen,
  promocoes: () => PromocoesScreen,
  login: () => LoginScreen
}))

export default class extends React.Component {
  render() {
    /**
      * NavigationProvider is only needed at the top level of the app,
      * similar to react-redux's Provider component. It passes down
      * navigation objects and functions through context to children.
      *
      * StackNavigation represents a single stack of screens, you can
      * think of a stack like a stack of playing cards, and each time
      * you add a screen it slides in on top. Stacks can contain
      * other stacks, for example if you have a tab bar, each of the
      * tabs has its own individual stack. This is where the playing
      * card analogy falls apart, but it's still useful when thinking
      * of individual stacks.
      */
    return (

        <StackNavigation
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: PRIMARY_COLOR,
              tintColor: TITLE_COLOR,
            }
          }}
          initialRoute={Router.getRoute('login')}
        />
    )
  }
}
