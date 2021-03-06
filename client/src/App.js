import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navbar/navbar';
import Landing from './components/landingpage/landingpage';
import Portfolio from './components/portfolio/portfolio';
import TransactionContainer from './components/transactions/transactionscontainer';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import SignOut from './components/authentication/signout';
import requireAuth from './components/highauth/require';
import noRequireAuth from './components/highauth/norequire';


import './styles/App.css';

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <Router >
          <header >
            <NavBar />
          </header>
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signin" component={noRequireAuth(SignIn)} />
            <Route exact={true} path="/signup" component={noRequireAuth(SignUp)} />
            <Route exact={true} path="/signout" component={noRequireAuth(SignOut)} />
            <Route exact={true} path="/portfolio" component={requireAuth(Portfolio)} />
            <Route exact={true} path="/transactions" component={requireAuth(TransactionContainer)} />
          </Switch>

        </Router>
      </div>
    )
  }
}

export default App;
