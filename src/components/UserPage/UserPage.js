import React from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import Nav from '../Nav/Nav';
// import Calendar from '../Calendar/Calendar';
import SideNav from '../SideNav/SideNav';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import Footer from '../Footer/Footer';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    {/* <Nav /> */}
    <SideNav/>
    {/* <Calendar /> */}
    {/* <LogOutButton className="log-in" /> */}
    {/* <Footer /> */}
  </div>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
