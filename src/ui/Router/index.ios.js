import React, {
  Component,
  PropTypes,
} from 'react'

import DrawerNavigation from '@ui/Drawer/components/Navigation'

export default class Router extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <DrawerNavigation />
    )
  }
}
