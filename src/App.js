import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Staff from "./components/Staff";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './components/auth/Login';
import Setting from './components/Setting'

const config = {
  issuer: 'https://dev-752199.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oaf3c6u4pmzxPPCz356'
}

function onAuthRequired({history}){
  history.push('/login')
}

//when we protect route with SecureRoute it calls onAuthRequired funtion which redirects to the login if not loggedin.
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
        <div className="container">
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
                  onAuthRequired={onAuthRequired}
        >
          <Route path="/" component={Home} exact={true} />
          <SecureRoute path="/setting" component={Setting} exact={true} />
          <SecureRoute path="/staff" exact={true} component={Staff} exact={true} />
          <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-752199.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
          </Security>
        </div>
      </Router>
    );
  }
}

export default App;
