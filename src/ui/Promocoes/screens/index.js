import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  Button,
} from 'react-native';
import Promocoes from '../containers/Promocoes'
import ScreenContent from '@ui/Shared/ScreenContent'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from '@ui/DrawerLayout'

export default class PromocoesScreen extends Component {
  render() {
    return (
      <ScreenContent>
        <Promocoes />
        <Icon name="rocket" size={50} color="#951827" />
        
        </ScreenContent>
    )
  }
}
