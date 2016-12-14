import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
} from 'react-native';
import Restaurantes from '../containers/Restaurantes'
import ScreenContent from '@ui/Shared/ScreenContent'

export default () => (
  <ScreenContent>
    <Restaurantes />
  </ScreenContent>
)
