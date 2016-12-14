import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import { DefaultRenderer } from 'react-native-router-flux'
export default class DrawerLayout extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Button
          onPress={() => Actions.restaurantes()}
          title="Restaurantes"
          color="#63a5c2"
        />
        <Button
          onPress={() => Actions.promocoes()}
          title="Promoções"
          color="#63a5c2"
        />
      </View>
    );

    console.log(this.props.children)

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
          <ToolbarAndroid
            title="oi"
            style={{ backgroundColor: '#63a5c2', height: 56}}
            titleColor="white"
          />
          {/* <View> */}
            <DefaultRenderer navigationState={this.props.children[0]} onNavigate={this.props.onNavigate} />
          {/* </View> */}

      </DrawerLayoutAndroid>
    );
  }

}
