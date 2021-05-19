import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DetailContainer from '../container/DetailContainer';
import ListPage from '../container/ListPage'
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
         render={ routerProps => <DetailContainer {...routerProps} /> } 
        />
      </Switch>
    </Router>
  )
}
