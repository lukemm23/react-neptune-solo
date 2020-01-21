import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import DatePicker from '../../ReusableComp/DatePicker/DatePicker';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './DispatchPage.css';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Dispatch extends Component {
    state = {
        employee_id: '',
        id: '',
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
                        <Typography>{item.id}</Typography>
                        <Typography>{item.service} {item.customer_id} {item.notes}</Typography>
                        <Typography>{item.date}</Typography>
                        <Typography>{item.order_id}</Typography>
                        <Typography>{item.status} {item.total_due}</Typography>
                        <Button variant="contained" color="primary" onClick={(event) => this.setState({ id: item.order_id })}>Dispatch</Button>
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
                    <Typography>{item.id}</Typography>
                    <Typography>{item.service} {item.customer_id} {item.notes}</Typography>
                    <Typography>{item.date}</Typography>
                    <Typography>{item.status} {item.total_due}</Typography>
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
                    <h3>orders:</h3>
                    <DatePicker />
                    <br />
                    <select onChange={(event) => this.setState({ employee_id: event.target.value })}>
                        <option value="">Choose Technician</option>
                        <option value="1">Luke</option>
                        <option value="3">Josh</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={this.changeTech}>Choose Tech</Button>
                    <br/>
                    <br/>
                    <Card>
                        <CardContent>

                            <Typography>Order available for dispatch:</Typography>

                            {newDateArr}

                        </CardContent>
                    </Card>
                    <br />
                    <br />
                    <br />
                    <Card>
                        <CardContent>
                            <Typography>Technician assigned orders: </Typography>
                            {orderByTechArr}
                        </CardContent>
                    </Card>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={this.editOrder}>Confirm Changes</Button>
                </div>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Dispatch);

