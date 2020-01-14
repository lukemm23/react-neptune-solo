import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from '../Modules/ProtectedRoute/ProtectedRoute'
// pages routing
import AboutPage from '../MainPages/AboutPage/AboutPage';
import LandingPage from '../MainPages/LandingPage/LandingPage';
import LoginPage from '../MainPages/LoginPage/LoginPage';
import RegisterPage from '../MainPages/RegisterPage/RegisterPage';
// protected pages routing
import UserPage from '../AdminPages/UserPage/UserPage';
import SearchPage from '../AdminPages/SearchPage/SearchPage';
import CustomerPage from '../AdminPages/CustomerPage/CustomerPage';
import InvoicePage from '../AdminPages/InvoicePage/InvoicePage';
import ChatPage from '../AdminPages/ChatPage/ChatPage';
import DispatchPage from '../AdminPages/DispatchPage/DispatchPage';


import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/home" component={LandingPage} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute exact path="/admin" component={UserPage} />
            <ProtectedRoute exact path="/search" component={SearchPage} />
            <ProtectedRoute exact path="/customer" component={CustomerPage} />
            <ProtectedRoute exact path="/dispatch" component={DispatchPage} />
            <ProtectedRoute exact path="/chat" component={ChatPage} />
            <ProtectedRoute exact path="/invoice" component={InvoicePage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/login" authRedirect="/admin" component={LoginPage} />
            <ProtectedRoute exact path="/registration" authRedirect="/admin" component={RegisterPage} />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect()(App);

