import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
                <h4  style={{ marginLeft: '35vh' }}>order number: {this.props.store.setOrder.id}</h4>
                <div>
                    <div style={{ marginLeft: '33vh' }}>
                        <span>Name: {this.props.store.selected.firstname}</span><span> </span>
                        <span>{this.props.store.selected.lastname}</span><span> </span>
                        <span>Phone: {this.props.store.selected.phone}</span>
                    </div>
                    <div style={{ marginLeft: '33vh' }}>
                        <span>address: {this.props.store.selected.address}</span><span> </span>
                        <span>{this.props.store.selected.city}</span><span> </span>
                        <span>{this.props.store.selected.zipcode}</span>
                    </div>
                    <br />
                    <div>

                        <InputLabel>Select Service</InputLabel>
                        <Select style={{height: '6.6vh', width: '20%' }} variant="outlined" onChange={(event) => this.setState({ service: event.target.value })}>
                            <MenuItem value="1">premium cleaning</MenuItem>
                            <MenuItem value="2">pump repair</MenuItem>
                        </Select>

                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField className="input" size="small" label="Date of Service" variant="outlined" placeholder="date of service" onChange={(event) => this.onChange(event, 'date')} />
                    </div>
                    <br />
                    <div>
                        <TextField className="input" size="small" label="Service Frequency" variant="outlined" placeholder="service frequency" onChange={(event) => this.onChange(event, 'service_frequency')} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField className="input" size="small" label="Estimated Time" variant="outlined" placeholder="estimated time" onChange={(event) => this.onChange(event, 'estimate_time')} />
                    </div>
                    <br />
                    <div>
                        <TextField className="input" size="small" label="Notes" variant="outlined" placeholder="notes" onChange={(event) => this.onChange(event, 'notes')} />
                    </div>
                    <br />
                    <div>
                        <Button variant="contained" color="primary" onClick={this.editOrder}>Add Order</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" color="primary" onClick={this.cancelButton}>Cancel</Button>
                    </div>


                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(OrderPage);



