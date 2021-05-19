import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListPage from '../container/ListPage'
import Detail from '../display/Detail'
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"
         exact={true}
         render={ routerProps => <ListPage {...routerProps} /> } 
        />
        <Route path="/:id"
         exact={true}
         render={ routerProps => <Detail {...routerProps} /> } 
        />
      </Switch>
    </Router>
  )
}
