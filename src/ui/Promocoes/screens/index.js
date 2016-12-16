import React, {
  Component,
} from 'react'

import Promocoes from '../containers/Promocoes'
import ScreenContent from '@ui/Shared/ScreenContent'
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuButton from '@ui/Shared/components/MenuButton'

export default class PromocoesScreen extends Component {
  static route = {
     navigationBar: {
       title: 'Promocoes',
       renderLeft: (route, props) => <MenuButton />
     }
   }

  render() {
    return (
      <ScreenContent>
        <Promocoes />
      </ScreenContent>
    )
  }
}
