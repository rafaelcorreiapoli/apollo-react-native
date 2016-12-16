import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  Button,
  StatusBar
} from 'react-native';

import ControlledDrawerLayoutAndroid from './ControlledDrawerLayoutAndroid'

import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import { DefaultRenderer } from 'react-native-router-flux'
import { getDrawerOpen } from './select'
import { closeDrawer, openDrawer } from './actions'

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
    var navigationView = (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        <View style={{height: 150, alignSelf: 'stretch', backgroundColor: 'rgb(193, 18, 86)', paddingTop: StatusBar.currentHeight}}>
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
    );

    return (
      <ControlledDrawerLayoutAndroid
        drawerBackgroundColor="#63a5c2"
        statusBarBackgroundColor='#4399be'
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerOpen={this.props.drawerOpen}
        onRequestClose={this.props.closeDrawer}
        onRequestOpen={this.props.openDrawer}
        renderNavigationView={() => navigationView}>
          <Icon.ToolbarAndroid
            navIconName="md-menu"
            onIconClicked={this._handleIconClick}
            title="oi"
            style={{ backgroundColor: '#63a5c2', height: 56}}
            titleColor="white"
          />
          {/* <View> */}
            <DefaultRenderer navigationState={this.props.children[0]} onNavigate={this.props.onNavigate} />
          {/* </View> */}

      </ControlledDrawerLayoutAndroid>
    );
  }
}


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
