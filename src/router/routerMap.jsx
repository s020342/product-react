import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

export default class RouteMap extends Component {
  render() {
      const {routes}=this.props
      //console.log(routes)
      const defaultRoute=<Route  path='/' component={()=>{
        return <Redirect  to='/home'></Redirect>
    }} key={111} exact />
    return (
      <Switch>
        {
            routes.map((item,index)=>{
                const Comp=item.component;
                return <Route path={item.path} component={(api)=>{
                    return <Comp routes={item.children} {...api}></Comp>
                }} key={index}/>
                
            }).concat(defaultRoute)
        }
      </Switch>
    )
  }
}
