import React, {Component} from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

// import LogOutButton from '../LogOutButton/LogOutButton';
// import Nav from '../Nav/Nav';
// import Calendar from '../Calendar/Calendar';
import SideNav from '../SideNav/SideNav';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import Footer from '../Footer/Footer';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component{
  
  render(){
    return (
      <Router>
      <div>
      <Switch>
        {/* <Nav /> */}
        <SideNav/>
        <Route exact path="/admin" component={UserPage}/>
        {/* <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/customer" component={CustomerPage}/>
        <Route exact path="/dispatch" component={DispatchPage}/>
        <Route exact path="/chat" component={ChatPage}/>
        <Route exact path="/invoice" component={InvoicePage}/> */}
        {/* <Calendar /> */}
        {/* <LogOutButton className="log-in" /> */}
        {/* <Footer /> */}
        </Switch>
      </div>
      </Router>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
