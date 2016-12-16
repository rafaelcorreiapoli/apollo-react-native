import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  ListView,
  Text,
  RefreshControl,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import RefreshableListView from '@ui/Shared/components/RefreshableListView'

export default class RestaurantesList extends Component {

  static defaultProps = {
    restaurantes: [],
    loading: false
  }

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  _renderRow(data) {
    return (
      <TouchableHighlight>
        <Text>{data.nome}</Text>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <RefreshableListView
          style={{backgroundColor: 'white'}}
          rows={this.props.restaurantes}
          renderRow={this._renderRow}
          loading={this.props.loading}
          onRefetch={this.props.refetch}
        />
      </View>
    );
  }

}
