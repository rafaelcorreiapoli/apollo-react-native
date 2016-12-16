import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation'
import {
  LIGHT_GRAY
} from '@resources/colors'
import Header from '../Header'
import Item from '../Item'
import Router from '@router'

export default class Drawer extends React.Component {
  render() {
    return (
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        initialItem="restaurantes"
        drawerWidth={300}
        renderHeader={() => (
          <Header
            name={'Rafael Ribeiro Correias'}
          />
        )}
      >
        <DrawerNavigationItem
          id="restaurantes"
          selectedStyle={styles.selected}
          renderTitle={(isSelected) => (
            <Item
              isSelected={isSelected}
              label={'Restaurantes'}
            />
          )}
        >
          <StackNavigation
            id="restaurantes"
            initialRoute={Router.getRoute('restaurantes')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="promocoes"
          selectedStyle={styles.selected}
          renderTitle={(isSelected) => (
            <Item
              isSelected={isSelected}
              label={'Promoções'}
            />
          )}
        >
          <StackNavigation
            id="promocoes"
            initialRoute={Router.getRoute('promocoes')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    )
  }
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: LIGHT_GRAY
  }
})
