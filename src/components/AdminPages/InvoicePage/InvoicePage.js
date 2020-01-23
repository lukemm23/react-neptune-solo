import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import MapElement from '../../ReusableComp/Map/MapElement';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class Invoice extends Component {
    state = {
        id: ''
    }

    onChange = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    search = () => {
        this.props.dispatch({
            type: 'GET_ORDER',
            payload: this.state
        });
    }

    print = () => {
        window.print()
    }

    render() {
        return (
            <div>
                <SideNav history={this.props.history} />
                <h2>Invoice Page</h2>
                <TextField style={{ marginLeft: '33vh' }} className="input"
                    size="small" label="Enter Order Id" variant="outlined"
                    placeholder="Enter Order Id"
                    onChange={(event) => this.onChange(event, 'id')} />
                &nbsp;&nbsp;
                <Button variant="contained" color="primary" onClick={this.search}>Search</Button>
                <br />
                <br />
                <Card style={{ height: '20vh', width: '60%', marginLeft: '40px' }}>
                    <CardContent>
                        <Typography>Order ID: {this.props.store.setOrder.id} </Typography>
                        <Typography>{this.props.store.setOrder.service}</Typography>
                        <Typography>Frequency: {this.props.store.setOrder.service_frequency}</Typography>
                        <Typography>Date: {this.props.store.setOrder.date} </Typography>
                        <Typography>Status:{this.props.store.setOrder.status}</Typography>
                    </CardContent>
                </Card>
                <br/>
                <Button style={{ marginLeft: '33vh' }} variant="contained" color="primary" 
                onClick={this.print}>Print Invoice</Button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Invoice);