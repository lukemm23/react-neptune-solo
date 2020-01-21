import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Customer extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipcode: '',
        notes: '',
        estimate_time:'',
    }

    onChange = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    cancelButton = (event) => {
        this.props.history.push('/admin');
    }

    addCustomer = () => {
        this.props.dispatch({
            type: 'ADD_CUSTOMER',
            payload: this.state
        });
        this.props.dispatch({
            type: 'GET_CUSTOMERS'
        });
        this.props.dispatch({
            type: 'ADD_ORDER',
            payload: this.state.estimate_time
        });
        this.props.history.push('/order');
    }

    render() {
        return (
            <div>
                <SideNav history={this.props.history} />
                <h2>Customer Page</h2>
                <div>
                    <TextField style={{ marginLeft: '33vh' }}  className="input" size="small" label="First Name" variant="outlined" placeholder="First Name" onChange={(event) => this.onChange(event, 'firstname')} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField size="small" label="Email" variant="outlined" placeholder="Email" onChange={(event) => this.onChange(event, 'email')} />
                </div>
                <br/>
                <div>
                    <TextField style={{ marginLeft: '33vh' }}  size="small" label="Last Name" variant="outlined" placeholder="Last Name" onChange={(event) => this.onChange(event, 'lastname')} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField size="small" label="Phone" variant="outlined" placeholder="Phone" onChange={(event) => this.onChange(event, 'phone')} />
                </div>
                <br/>
                <div>
                    <TextField size="small" style={{ marginLeft: '33vh', height: '4vh', width: '39%' }} label="Street Address" variant="outlined" placeholder="Street Address" onChange={(event) => this.onChange(event, 'address')} />
                </div>
                <br/>
                <div>
                    <TextField style={{ marginLeft: '33vh' }}  size="small" label="City" variant="outlined" placeholder="City" onChange={(event) => this.onChange(event, 'city')} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField size="small" label="Zipcode" variant="outlined" placeholder="Zipcode" onChange={(event) => this.onChange(event, 'zipcode')} />
                </div>
                <br/>
                <div>
                    <TextField size="small" style={{ marginLeft: '33vh', height: '4vh', width: '39%' }} label="Notes" variant="outlined" placeholder="Notes" onChange={(event) => this.onChange(event, 'notes')} />
                </div>
                <br/>
                <div>
                    <Button style={{ marginLeft: '39vh' }} variant="contained" color="primary" onClick={this.addCustomer}>Add Customer</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={this.cancelButton}>Cancel</Button>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(Customer));