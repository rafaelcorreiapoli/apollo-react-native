import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from '@apollo/client'
import Restaurantes from '../Restaurantes/containers/Restaurantes'
import Promocoes from '../Promocoes/containers/Promocoes'
import Router from '@ui/Router'
import configureStore from '../../store'
import { Provider}  from 'react-redux'

const store = configureStore()

export default class App extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>

      <ApolloProvider client={client}>
        <View style={{ flex: 1}}>
          <Router />
        </View>
      </ApolloProvider>
      </Provider>
    );
  }

}
