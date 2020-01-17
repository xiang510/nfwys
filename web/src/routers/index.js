import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import routers from './routers';


export function RouteWithSubRoutes(route) {
    if(route.isLogin) {
      if(route.loginStatus) {
        return (
          <Route
            path={route.path}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
          />
        )
      }else {
        return null
      }
    }else {
      return (
        <Route
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      );
    }
    
}


export default function rootRouter() {
    return (
        <Router>
            <Switch>
                {
                    routers.map( (route, key) => <RouteWithSubRoutes key={key} { ...route}  />)
                }
                <Redirect from="" to="/index" />
            </Switch>
            
        </Router>
    )
};