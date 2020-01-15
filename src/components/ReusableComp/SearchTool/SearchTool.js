import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class SearchTool extends Component {
    state= {
        name:'',
        phone:'',
    }

    componentDidMount() { // react Component method
        this.props.dispatch({
          type: 'GET_CUSTOMERS',
        })
      }

    onChange = (event, infoKey) => {
        this.setState({
            [infoKey]:event.target.value
        });
        console.log(this.state);
    }

    cancelButton = (event) => {
        this.props.history.push('/admin');
    }

    render() {
        const customersArr = this.props.store.customers.map((item, index)=>{
            if(this.state.name === item.firstname || this.state.name === item.lastname){
                return (
                    <li key={index}>
                        <div>{item.firstname} {item.lastname} {item.phone}</div>
                        <div>{item.address}</div>
                        <div>{item.city} {item.zipcode}</div>
                    </li>
                )
            } else if (this.state.phone === item.phone){
                return (
                    <li key={index}>
                        <div>{item.firstname} {item.lastname} {item.phone}</div>
                        <div>{item.address}</div>
                        <div>{item.city} {item.zipcode}</div>
                    </li>
                )
            } else {
                return (
                    <li key={index}>
                    </li>
                )
            }  
        })
        return (
            <div>
                <input placeholder="Enter Customer Name" onChange={(event)=>this.onChange(event, 'name')} />
                <span>OR</span>
                <input placeholder="Enter Customer Phone" onChange={(event)=>this.onChange(event, 'phone')} />
                <div>
                    Search Results:
                    <ul>{customersArr}</ul>
                </div>
                <button>Add Service for Customer</button>
                <button onClick={this.cancelButton}>Cancel</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(SearchTool));