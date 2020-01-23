import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';

// import LogOutButton from '../../ReusableComp/LogOutButton/LogOutButton';
// import Nav from '../Nav/Nav';
import Calendar from '../../ReusableComp/Calendar/Calendar';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component{
state = {
  dateComp : new Date()
}

componentDidMount() { // react Component method
  this.props.dispatch({
      type: 'GET_ALL_ORDERS_TODAY',
      payload: this.state.dateComp
  });
  this.props.dispatch({
    type: 'GET_ALL_NEW_ORDER',
})
}

callMe(){
  setInterval(()=>{
    this.setState({
      dateComp : new Date()
    });
  },1000);
}
  
  render(){const newOrderArr = this.props.store.setAllNew.map((item, index) => {  
        return (
            <TableRow key={index} className="style">
                <TableCell>{item.order_id}</TableCell>
                <TableCell>{item.service}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell><Button variant="contained" color="primary">Details</Button></TableCell>
            </TableRow>
        )
})
    return (
    
      <div>
        {/* <Nav /> */}
        <SideNav history={this.props.history} />
        <h2>Home Page</h2>
        <div style={{display:"flex"}}>
        <div style={{flex:"1", padding:"20px"}}>
        <Card style={{ height: '20vh', width: '100%' }}>
          <CardContent>
            <Typography>
            <strong>Current Date:</strong>
          </Typography>
          <Moment>{this.state.dateComp}</Moment>
          {this.callMe()}
          </CardContent>
        </Card>
        </div>
        {/* <br/> */}
        <div style={{flex:"1", padding:"20px"}}>
        <Card style={{ height: '20vh', width: '100%' }}>
          <CardContent>
            <Typography>
            <strong>Total Orders Today:</strong>
          </Typography>
            6
          <Typography>
            {/* {this.props.store.setAllNew.length} */}
          </Typography>
          </CardContent>
        </Card>
        </div>
        <br/>
        <div style={{flex:"1", padding:"20px", marginRight:"15px"}}>
        <Card style={{ height: '20vh', width: '100%' }}>
          <CardContent>
            <Typography>
            <strong>Total Todos:</strong>
          </Typography>
          <Typography>
            {this.props.store.setAllNew.length}
          </Typography>
          </CardContent>
        </Card>
        </div>
        </div>
        <Calendar style={{  margin:"15px"}} />
        <Table style={{ padding:"10px", margin:"50px",width: '90%'}}>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Service ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newOrderArr}
          </TableBody>
        </Table>
      </div>
      
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
