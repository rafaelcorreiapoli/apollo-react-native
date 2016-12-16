import React, {
  Component,
} from 'react'

import Restaurantes from '../containers/Restaurantes'
import ScreenContent from '@ui/Shared/ScreenContent'
import MenuButton from '@ui/Shared/components/MenuButton'

export default class RestaurantesScreen extends Component {
  static route = {
     navigationBar: {
       title: 'Restaurantes',
       renderLeft: (route, props) => <MenuButton />
     }
   }

  render() {
    return (
      <ScreenContent>
        <Restaurantes />
      </ScreenContent>
    )
  }
}
