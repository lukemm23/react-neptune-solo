import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//card styling
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class SearchTool extends Component {
    state = {
        name: '',
        phone: '',
        estimate_time: '',
    }
    

    componentDidMount() { // react Component method
        this.props.dispatch({
            type: 'GET_CUSTOMERS',
        })
    }

    onChange = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    cancelButton = (event) => {
        this.props.history.push('/admin');
    }

    addService = indexArray => event => {
        if (indexArray.length > 1) {
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
        // const classes = useStyles();
        // const bull = <span className={classes.bullet}>•</span>;
        let indexArray = [];

        const customersArr = this.props.store.customers.map((item, index) => {

            if (this.state.name === item.firstname || this.state.name === item.lastname) {
                indexArray = [...indexArray, index];
                return (
                    <Typography key={index}>
                        <Typography><strong>Name:</strong> {item.firstname} {item.lastname} <strong>Phone:</strong> {item.phone}</Typography>
                        <Typography><strong>Street Address:</strong> {item.address}</Typography>
                        <Typography>{item.city} {item.zipcode}</Typography>
                    </Typography>
                )
            } else if (this.state.phone === item.phone) {
                indexArray = [...indexArray, index];
                return (
                    <Typography key={index}>
                        <Typography><strong>Name:</strong>  {item.firstname} {item.lastname} <strong>Phone:</strong> {item.phone}</Typography>
                        <Typography><strong>Street Address:</strong>  {item.address}</Typography>
                        <Typography>{item.city} {item.zipcode}</Typography>
                    </Typography>
                )
            } else {
                return (
                    <Typography key={index}>
                    </Typography>
                )
            }
        })

        return (
            <div>
                <TextField style={{ marginLeft: '33vh' }} className="input" size="small" label="Enter Name" variant="outlined" placeholder="Enter Customer Name" onChange={(event) => this.onChange(event, 'name')} />
                <span>   OR   </span>
                <TextField className="input" size="small" label="Enter Phone" variant="outlined" placeholder="Enter Customer Phone" onChange={(event) => this.onChange(event, 'phone')} />
                <br/>
                <br/>
                <Card style={{ marginLeft:'21vh', height: '27vh', width: '60%' }}>
                    <CardContent>
                        <Typography>
                            <h3>Search Results:</h3>
                    </Typography>
                        {customersArr}
                    </CardContent>
                </Card>
                <br/>
                <br/>
                <Button style={{ marginLeft: '37vh' }} variant="contained" color="primary" onClick={this.addService(indexArray)}>Add Service for Customer</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="primary" onClick={this.cancelButton}>Cancel</Button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(SearchTool));