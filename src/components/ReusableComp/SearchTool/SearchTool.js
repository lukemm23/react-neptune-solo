import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SearchTool extends Component {
    state= {
        name:'',
        phone:'',
        estimate_time:'',
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
    }

    cancelButton = (event) => {
        this.props.history.push('/admin');
    }

    addService = indexArray => event => {
        if(indexArray.length > 1){
            alert('TOO MANY CUSTOMERS');
        } else {
            this.props.dispatch({
            type: 'SET_CUSTOMER_ID',
            payload: this.props.store.customers[indexArray[0]]
        });
            this.props.dispatch({
                type: 'ADD_ORDER',
                payload: this.state.estimate_time
            });
        }
        this.props.history.push('/order');
    }

    
    render() {
        let indexArray = [];

        const customersArr = this.props.store.customers.map((item, index)=>{
            
            if(this.state.name === item.firstname || this.state.name === item.lastname){
                indexArray = [...indexArray, index];
                return (
                    <div key={index}>
                        <div>{item.id}</div>
                        <div>{item.firstname} {item.lastname} {item.phone}</div>
                        <div>{item.address}</div>
                        <div>{item.city} {item.zipcode}</div>
                    </div>
                )
            } else if (this.state.phone === item.phone){
                indexArray = [...indexArray, index];
               return (
                    <div key={index}>
                        <div>{item.id}</div>
                        <div>{item.firstname} {item.lastname} {item.phone}</div>
                        <div>{item.address}</div>
                        <div>{item.city} {item.zipcode}</div>
                    </div>
                )
            } else {
                return (
                    <div key={index}>
                    </div>
                )
            }            
        })

        return (
            <div>
                <TextField className="input" size="small" label="Enter Name" variant="outlined" placeholder="Enter Customer Name" onChange={(event)=>this.onChange(event, 'name')} />
                <span>   OR   </span>
                <TextField className="input" size="small" label="Enter Phone" variant="outlined" placeholder="Enter Customer Phone" onChange={(event)=>this.onChange(event, 'phone')} />
                <div>
                    Search Results:
                    <div>{customersArr}</div>
                </div>
                <Button variant="contained" color="primary" onClick={this.addService(indexArray)}>Add Service for Customer</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="primary" onClick={this.cancelButton}>Cancel</Button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(SearchTool));