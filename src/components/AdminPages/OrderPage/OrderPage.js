import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import SideNav from '../../ReusableComp/SideNav/SideNav';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class OrderPage extends Component {
    state = {
        customer_id: '',
        id: '',
        service: '',
        service_frequency: '',
        estimate_time: '',
        date: '',
        notes: ''
    };

    onChange = (event, infoKey) => {
        this.setState({
            customer_id: this.props.store.selected.id,
            id: this.props.store.setOrder.id,
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    editOrder = () => {
        this.props.dispatch({
            type: 'EDIT_ORDER',
            payload: this.state
        });
        this.props.dispatch({
            type: 'POST_TO_JUNCTION',
            payload: this.state
        });
        this.props.history.push('/dispatch');
    }

    cancelButton = (event) => {
        this.props.history.push('/admin');
    }

    render() {
        return (
            <div>
                <SideNav />
                <h2>Order Page</h2>
                <h4>order number: {this.props.store.setOrder.id}</h4>
                <div>
                    <div>
                        <span>Name: {this.props.store.selected.firstname}</span><span> </span>
                        <span>{this.props.store.selected.lastname}</span><span> </span>
                        <span>Phone: {this.props.store.selected.phone}</span>
                    </div>
                    <div>
                        <span>address: {this.props.store.selected.address}</span><span> </span>
                        <span>{this.props.store.selected.city}</span><span> </span>
                        <span>{this.props.store.selected.zipcode}</span>
                    </div>

                    <div>
                        <select onChange={(event) => this.setState({ service: event.target.value })}>
                        <option value="">Choose Service</option>
                            <option value="1">premium cleaning</option>
                            <option value="2">pump repair</option>
                        </select>
                        <input placeholder="date of service" onChange={(event) => this.onChange(event, 'date')} />
                    </div>
                    <div>
                        <input placeholder="service frequency" onChange={(event) => this.onChange(event, 'service_frequency')} />
                        <input placeholder="estimated time" onChange={(event) => this.onChange(event, 'estimated_time')} />
                    </div>
                    <div>
                        <input placeholder="notes" onChange={(event) => this.onChange(event, 'notes')} />
                    </div>
                    <div>
                        <button onClick={this.editOrder}>Add Customer</button>
                        <button onClick={this.cancelButton}>Cancel</button>
                    </div>


                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(OrderPage);