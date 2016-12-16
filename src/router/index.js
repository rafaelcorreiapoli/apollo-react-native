import {
  createRouter,
} from '@exponent/ex-navigation'

import RestaurantesScreen from '@ui/Restaurantes/screens'
import PromocoesScreen from '@ui/Promocoes/screens'
import LoginScreen from '@ui/Login/screens'
import DrawerScreen from '@ui/Drawer/components/Navigation'
export default createRouter(() => ({
  main: () => DrawerScreen,
  restaurantes: () => RestaurantesScreen,
  promocoes: () => PromocoesScreen,
  login: () => LoginScreen
}))
