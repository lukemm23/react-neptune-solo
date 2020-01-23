import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import DatePicker from '../../ReusableComp/DatePicker/DatePicker';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './DispatchPage.css';
import Button from '@material-ui/core/Button';
import Map from '../../ReusableComp/Map/Map';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class Dispatch extends Component {
    state = {
        employee_id: '',
        id: '',
        origin:'',
        destination:''
    };
    componentDidMount() { // react Component method
        this.props.dispatch({
            type: 'GET_ALL_NEW_ORDER',
        })
    }

    changeTech = (event) => {
        this.props.dispatch({
            type: 'GET_ORDER_BY_TECH',
            payload: this.state.employee_id
        })
        this.setState({
           ...this.props.store.setOrderTech
        })
        console.log(this.state);
    }


    editOrder = () => {
        console.log(this.state);
        this.props.dispatch({
            type: 'ADD_TECH',
            payload: this.state
        })
        this.props.dispatch({
            type: 'GET_ALL_NEW_ORDER',
        })

    }

    render() {
        const newDateArr = this.props.store.setAllNew.map((item, index) => {
            if (this.props.store.setDate.date === item.date && item.status === 'not dispatched') {
                return (
                    <Typography key={index} className="style">
                        <Typography>Order Id: {item.order_id}</Typography>
                        <Typography>Service Selected:{item.service}</Typography>
                        <Typography>Date Selected: {item.date} Order Status: {item.status}</Typography>
                        <Button variant="contained" color="primary" 
                        onClick={(event) => this.setState({ id: item.order_id, address:item.address })}>
                            Dispatch</Button>
                    </Typography>
                )
            }
            return (
                console.log('gotta have this')
            )
        })


        const orderByTechArr = this.props.store.setOrderTech.map((item, index) => {
            return (
                <Typography key={index} className="style">
                    <Typography>Order Id: {item.order_id}</Typography>
                    <Typography>Service Selected: {item.service}</Typography>
                    <Typography>Date Selected:{item.date} Order Status:{item.status}</Typography>
                    {/* <Button variant="contained" color="primary" onClick={(event) => {
                        this.setState({
                            employee_id:"none",
                            id: item.order_id
                        })
                    }
                }>Remove</Button> */}
                </Typography>
            )
        })
        return (
            <div>
                <SideNav history={this.props.history} />
                <h2>Dispatch Page</h2>

                <div>
                    <h3 style={{ marginLeft:'40px' }}>Orders:</h3>
                    <div style={{display:"flex"}}>
                    <div style={{flex:"1"}}>
                    <DatePicker />
                    </div>
                    <br />
                    <div style={{flex:"1"}}>
                    <InputLabel>Select Technician</InputLabel>
                    <Select style={{height: '4.6vh', width: '28%' }} variant="outlined" 
                    onChange={(event) => this.setState({ employee_id: event.target.value })}>
                        <MenuItem value="">Choose Technician</MenuItem>
                        <MenuItem value="1">Luke</MenuItem>
                        <MenuItem value="3">Josh</MenuItem>
                    </Select>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={this.changeTech}>Choose Tech</Button>
                    </div>
                    </div>
                    <br/>
                    <br/>
                    <div style={{display:"flex"}}>
                        <div style={{flex:"1"}}>
                    <Card style={{ marginLeft:'10px',height: '40vh', width: '61%' }}>
                        <CardContent>

                            <Typography>Order available for dispatch:</Typography>

                            {newDateArr}

                        </CardContent>
                    </Card>
                    </div>
                    <div style={{flex:"1"}}>
                    <Map style={{ height: '20vh', width: '100%' }} address={this.state.address}></Map>
                    </div>
                    
                    </div>
                    
                    <br />
                    
                    <Card style={{ height: '40vh', width: '29%', marginLeft:'5vh' }}>
                        <CardContent>
                            <Typography>Technician assigned orders: </Typography>
                            {orderByTechArr}
                        </CardContent>
                    </Card>
                    <br/>
                    <br/>
                    <Button style={{ marginLeft:'8vh' }} variant="contained" color="primary" 
                    onClick={this.editOrder}>Confirm Changes</Button>
                </div>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Dispatch);

