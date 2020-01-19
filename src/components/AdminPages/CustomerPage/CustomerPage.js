import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
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
                    <input placeholder="First Name" onChange={(event) => this.onChange(event, 'firstname')} />
                    <input placeholder="Email" onChange={(event) => this.onChange(event, 'email')} />
                </div>
                <div>
                    <input placeholder="Last Name" onChange={(event) => this.onChange(event, 'lastname')} />
                    <input placeholder="Phone" onChange={(event) => this.onChange(event, 'phone')} />
                </div>
                <div>
                    <input placeholder="Street Address" onChange={(event) => this.onChange(event, 'address')} />
                </div>
                <div>
                    <input placeholder="City" onChange={(event) => this.onChange(event, 'city')} />
                    <input placeholder="Zipcode" onChange={(event) => this.onChange(event, 'zipcode')} />
                </div>
                <div>
                    <input placeholder="Notes" onChange={(event) => this.onChange(event, 'notes')} />
                </div>
                <div>
                    <button onClick={this.addCustomer}>Add Customer</button>
                    <button onClick={this.cancelButton}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(Customer));