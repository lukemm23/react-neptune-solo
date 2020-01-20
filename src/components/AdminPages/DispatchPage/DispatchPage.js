import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import DatePicker from '../../ReusableComp/DatePicker/DatePicker';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './DispatchPage.css';
import Button from '@material-ui/core/Button';

class Dispatch extends Component {
    state = {
        employee_id: '',
        id: '',
    };
    componentDidMount() { // react Component method
        this.props.dispatch({
          type: 'GET_ALL_NEW_ORDER',
        })
      }

      changeTech = (event) => {  
        this.props.dispatch({
            type: 'GET_ORDER_BY_TECH',
            payload: this.state.employee_id
        })
      }


      editOrder = () => {
        console.log(this.state);
        this.props.dispatch({
            type: 'ADD_TECH',
            payload: this.state
        })
        this.props.dispatch({
            type: 'GET_ALL_NEW_ORDER',
          })
        
      }

    render(){
        const newDateArr = this.props.store.setAllNew.map((item, index)=>{
            if(this.props.store.setDate.date === item.date && item.status === 'not dispatched') {
            return (
                <div key={index} className="style">
                    <span>{item.id}</span>
                    <span>{item.service} {item.customer_id} {item.notes}</span>
                    <span>{item.date}</span>
                    <span>{item.order_id}</span>
                    <span>{item.status} {item.total_due}</span>
                    <Button variant="contained" color="primary" onClick={(event) => this.setState({id:item.order_id})}>Dispatch</Button>
                </div>
            )  
        } 
        return (
            console.log('gotta have this')
        )    
    })


        const orderByTechArr = this.props.store.setOrderTech.map((item, index)=>{
            return (
                <div key={index} className="style">
                    <span>{item.id}</span>
                    <span>{item.service} {item.customer_id} {item.notes}</span>
                    <span>{item.date}</span>
                    <span>{item.status} {item.total_due}</span>
                    {/* <Button variant="contained" color="primary" onClick={(event) => {
                        this.setState({
                            employee_id:"none",
                            id: item.order_id
                        })
                    }
                }>Remove</Button> */}
                </div>
            )      
    })
        return (
            <div>
                <SideNav history={this.props.history}/>
                <h2>Dispatch Page</h2>

                <div>
                    <h3>orders:</h3>
                    <DatePicker/>
                    <br/>
                    <select onChange={(event) => this.setState({ employee_id: event.target.value })}>
                        <option value="">Choose Technician</option>
                            <option value="1">Luke</option>
                            <option value="3">Josh</option>
                        </select>
                        <Button variant="contained" color="primary" onClick={this.changeTech}>Choose Tech</Button>
                <div>
                    Order available for dispatch: {newDateArr}
                </div> 
                <br/>
                <br/>
                <br/>
                <div>
                    Technician assigned orders: { orderByTechArr}
                </div>
                <Button variant="contained" color="primary" onClick={this.editOrder}>Confirm Changes</Button>
                </div>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Dispatch);

