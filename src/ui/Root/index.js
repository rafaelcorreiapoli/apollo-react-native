import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  NavigationExperimental
} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from '@apollo/client'
import Restaurantes from '../Restaurantes/containers/Restaurantes'
import Promocoes from '../Promocoes/containers/Promocoes'
import Router from '@ui/Router'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;
export default class App extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={{ flex: 1}}>
          <Router />
        </View>
      </ApolloProvider>
    );
  }

}
