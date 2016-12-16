import {
  createRouter,
} from '@exponent/ex-navigation'

import RestaurantesScreen from '@ui/Restaurantes/screens'
import PromocoesScreen from '@ui/Promocoes/screens'
import LoginScreen from '@ui/Login/screens'

export default createRouter(() => ({
  restaurantes: () => RestaurantesScreen,
  promocoes: () => PromocoesScreen,
  login: () => LoginScreen
}))
