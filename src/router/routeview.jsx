import React, { Component } from 'react'
import Routes from './routes'
import RouteMap from './routeMap'
export default class RouterView extends Component {
  render() {
      const {routes}=this.props;
     
    return (
      <div>
        <RouteMap routes={routes===undefined? Routes:routes}></RouteMap>
      </div>
    )
  }
}
