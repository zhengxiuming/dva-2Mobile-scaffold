/*
 * Create by zhengxiuming 20170926
 * */
/*jshint esversion: 6 */
import React from 'react';
import {Switch, Route, Redirect, routerRedux,Router} from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './routes/app';


//const {ConnectedRouter} = routerRedux;

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => require('./routes/error')
  });
  const routes = [
    {
      path: '/Home',
      models: () => [require('./models/HomeModel/Home')],
      component: () => require('./routes/HomePage/Home')
    }
  ];
  return (
    <Router history={history}>
    <App>
    <Switch>
    <Route exact path="/" render={() => (<Redirect to="/Home" />)} />
  {
    routes.map(({ path, ...dynamics }, key) => (
    <Route key={key}
    exact
    path={path}
    component={dynamic({
        app,
        ...dynamics,
      })}
      />
  ))
  }
  <Route component={error} />
    </Switch>
    </App>
    </Router>
  )
};
export default Routers;

