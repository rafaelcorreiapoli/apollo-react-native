import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  ListView,
  RefreshControl
} from 'react-native';

export default class RefreshableListView extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  }

  render() {
    const {
      loading,
      onRefetch,
      rows,
      ...otherProps
    } = this.props
    
    const dataSource = this.ds.cloneWithRows(rows)

    return (
      <ListView
        dataSource={dataSource}
        enableEmptySections
        refreshControl={
         <RefreshControl
           refreshing={loading}
           onRefresh={onRefetch}
         />
       }
       {...otherProps}
      />
    );
  }

}
