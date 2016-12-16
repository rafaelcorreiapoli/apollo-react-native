import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  DrawerLayoutAndroid
} from 'react-native';
import Drawer from 'react-native-drawer'

export default class ControlledDrawerLayoutAndroid extends Component {

  static defaultProps = {}

  static propTypes = {
    drawerOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }



  componentWillUnmount(){
    this.props.onRequestClose()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drawerOpen !== this.props.drawerOpen) {
      if (nextProps.drawerOpen === true) {
        this.drawer.openDrawer()
      } else {
        this.drawer.closeDrawer()
      }
    }
  }

  render() {
    return (
      <Drawer
        {...this.props}
        onDrawerClose={this.props.onRequestClose}
        onDrawerOpen={this.props.onRequestOpen}
        ref={drawer => this.drawer = drawer}
      />
    );
  }

}
