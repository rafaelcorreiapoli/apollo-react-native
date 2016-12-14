import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
} from 'react-native';
import Promocoes from '../containers/Promocoes'
import ScreenContent from '@ui/Shared/ScreenContent'

export default () => (
  <ScreenContent>
    <Promocoes />
  </ScreenContent>
)
