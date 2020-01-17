import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class Dispatch extends Component {
    componentDidMount() { // react Component method
        this.props.dispatch({
          type: 'GET_ALL_NEW_ORDER',
        })
      }

    render(){
        const newOrdersArr = this.props.store.setAllNew.map((item, index)=>{
            return (
                <li key={index}>
                    <div>{item.id}</div>
                    <div>{item.service} {item.customer_id} {item.notes}</div>
                    <div>{item.date}</div>
                    <div>{item.status} {item.total_due}</div>
                </li>
            )      
    })
        return (
            <div>
                <SideNav history={this.props.history}/>
                <h2>Dispatch Page</h2>
                <div>
                <ul>{ newOrdersArr}</ul>
                </div>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Dispatch);