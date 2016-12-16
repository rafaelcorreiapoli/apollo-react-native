import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  ActivityIndicator
} from 'react-native'

export default class LoadingOverlay extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <ActivityIndicator
          animating={true}
          style={{height: 80}}
          size="large"
        />
      </View>
    )
  }

}
