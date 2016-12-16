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

import RefreshableListView from '../../../Shared/components/RefreshableListView'

export default class PromocoesList extends Component {

  static defaultProps = {
    promocoes: [],
    loading: false
  }

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  _renderRow(data) {
    return (
      <TouchableHighlight>
        <Text>Promoco: {data.nome} / {data.restaurante.nome}</Text>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
      <Text>Promocao</Text>
        <RefreshableListView

          style={{backgroundColor: 'white'}}
          rows={this.props.promocoes}
          renderRow={this._renderRow}
          loading={this.props.loading}
          onRefetch={this.props.refetch}
        />
      </View>
    );
  }

}
