import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet
} from 'react-native'
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation'

import ControlledDrawerLayoutAndroid from './ControlledDrawerLayoutAndroid'

import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import { DefaultRenderer } from 'react-native-router-flux'
import { getDrawerOpen } from './select'
import { closeDrawer, openDrawer } from './actions'
import Drawer from 'react-native-drawer'
import Header from './components/Header'

class SideMenu extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        <View style={{height: 150, alignSelf: 'stretch', backgroundColor: 'rgb(193, 18, 86)', paddingTop: 20}}>
          <Text style={{color: 'white'}}>Rafael Ribeiro Correia</Text>
        </View>
        <Button
          onPress={() => {
            Actions.restaurantes()
            this.props.closeDrawer()
          }}
          title="Restaurantes"
          color="#63a5c2"
        />
        <Button
          onPress={() => {
            Actions.promocoes()
            this.props.closeDrawer()
          }}
          title="Promoções"
          color="#63a5c2"
        />
        <Button
          onPress={() => {
            this.props.closeDrawer()
            Actions.guest()
          }}
          title="Logout"
          color="#ee1477"
        />
      </View>
    )
  }
}
class DrawerLayout extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
    this._handleIconClick = this._handleIconClick.bind(this)
  }

  _handleIconClick() {
    this.props.openDrawer()
  }

  _renderHeader() {
    return (
      <View>
        <Text>Header</Text>
      </View>
    )
  }
  render() {
    return (
      <DrawerNavigation
        id="main"
        initialItem="restaurantes"
        drawerWidth={300}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id="restaurantes"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Home', isSelected)}
        >
          <StackNavigation
            id="restaurantes"
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="promocoes"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('About', isSelected)}
        >
          <StackNavigation
            id="promocoes"
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  drawerOpen: getDrawerOpen(state)
})

const mapDispatchToProps = dispatch => ({
  openDrawer() {
    dispatch(openDrawer())
  },
  closeDrawer() {
    dispatch(closeDrawer())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(DrawerLayout)
