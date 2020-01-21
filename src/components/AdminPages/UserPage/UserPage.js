import React, {Component} from 'react';
import { connect } from 'react-redux';

// import LogOutButton from '../../ReusableComp/LogOutButton/LogOutButton';
// import Nav from '../Nav/Nav';
// import Calendar from '../Calendar/Calendar';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import mapStoreToProps from '../../../redux/mapStoreToProps';
// import Map from '../../ReusableComp/Map/Map';
// import Map2 from '../../ReusableComp/Map/MapElement'
// import Footer from '../Footer/Footer';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component{
  state = {
    date: new Date()
  }

  callMe(){
    setInterval(()=>{
      this.setState({
        date:new Date()
      })
    },1000);
  }
  
  render(){
    return (
      <div>
        {/* <Nav /> */}
        <SideNav history={this.props.history} />
        <h2>User Page</h2>

        <div>
          <h1>
            Current Date
          </h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
          {this.callMe()}
        </div>
        {/* <Map /> */}
        {/* <Calendar /> */}
        {/* <Footer /> */}
      </div>
      
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
