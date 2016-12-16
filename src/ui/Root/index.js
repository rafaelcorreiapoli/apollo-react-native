import React, {
  Component,
} from 'react'

import { ApolloProvider } from 'react-apollo'
import client from '@apollo/client'
import RouterComponent from '@ui/Router'
import router from '@router'
import configureStore from '../../store'
import { NavigationProvider, NavigationContext } from '@exponent/ex-navigation'
const store = configureStore()

const navigationContext = new NavigationContext({
  router,
  store,
})

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <NavigationProvider context={navigationContext}>
          <RouterComponent />
        </NavigationProvider>
      </ApolloProvider>
    )
  }

}
