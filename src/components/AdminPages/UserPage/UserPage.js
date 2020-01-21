import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';

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
  dateComp : new Date()
}

callMe(){
  setInterval(()=>{
    this.setState({
      dateComp : new Date()
    });
  },1000);
}
  
  render(){
    return (
    
      <div>
        {/* <Nav /> */}
        <SideNav history={this.props.history} />
        <h2>User Page</h2>
        <div>
        <span>
        <Card style={{ height: '20vh', width: '42%' }}>
          <CardContent>
            <Typography>
            <strong>Current Date:</strong>
          </Typography>
          <Moment>{this.state.dateComp}</Moment>
          {this.callMe()}
          </CardContent>
        </Card>
        </span>
        <br/>
        <span>
        <Card style={{ height: '20vh', width: '42%' }}>
          <CardContent>
            <Typography>
            <strong>Total Orders:</strong>
          </Typography>
          {/* order total by date goes here */}
          </CardContent>
        </Card>
        </span>
        <br/>
        <span>
        <Card style={{ height: '20vh', width: '42%' }}>
          <CardContent>
            <Typography>
            <strong>Total Todos:</strong>
          </Typography>
          {/* order total by date goes here */}
          </CardContent>
        </Card>
        </span>
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
