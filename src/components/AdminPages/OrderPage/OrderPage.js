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
        heading: 'Class Component',
    };

    render() {
        return (
            <div>
                <SideNav />
                <h2>Order Page</h2>
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
                   
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(OrderPage);