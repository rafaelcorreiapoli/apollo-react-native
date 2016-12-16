import {
  createRouter,
} from '@exponent/ex-navigation'

import RestaurantesScreen from '@ui/Restaurantes/screens'
import PromocoesScreen from '@ui/Promocoes/screens'
import LoginScreen from '@ui/Login/screens'

import DrawerScreen from '@ui/DrawerLayout/components/Navigation'
import GuestScreen from '@ui/GuestLayout/components/Navigation'
import WelcomeScreen from '@ui/Welcome/screens'

export default createRouter(() => ({
  main: () => DrawerScreen,
  restaurantes: () => RestaurantesScreen,
  promocoes: () => PromocoesScreen,
  login: () => LoginScreen,
  guest: () => GuestScreen,
  welcome: () => WelcomeScreen
}))
