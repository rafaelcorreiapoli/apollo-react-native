import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet
} from 'react-native';

import ControlledDrawerLayoutAndroid from './ControlledDrawerLayoutAndroid'

import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import { DefaultRenderer } from 'react-native-router-flux'
import { getDrawerOpen } from './select'
import { closeDrawer, openDrawer } from './actions'
import Drawer from 'react-native-drawer'

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
            Actions.login({type: 'reset'})
            // this.props.closeDrawer()
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
    super(props);
    this.state = {};
    this._handleIconClick = this._handleIconClick.bind(this)
  }

  _handleIconClick() {
    this.props.openDrawer()
  }

  render() {
    const drawerStyles = {
      drawer: {
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 3
      },
      main: {
        paddingLeft: 3
      },
      mainOverlay: {
        backgroundColor: '#000',
        opacity: 0
      }
    }
    const tweenHandler = (ratio) => ({
      mainOverlay: {
        opacity: ratio / 2,
        backgroundColor: '#000'
      },
    })

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Drawer
          open={this.props.drawerOpen}
          onOpen={this.props.openDrawer}
          onClose={this.props.closeDrawer}
          type="overlay"
          content={
            <SideMenu
              closeDrawer={this.props.closeDrawer}
              openDrawer={this.props.openDrawer}
            />
          }
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={tweenHandler}
        >
          <DefaultRenderer navigationState={this.props.children[0]} onNavigate={this.props.onNavigate} />
        </Drawer>
      </View>
    );
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
