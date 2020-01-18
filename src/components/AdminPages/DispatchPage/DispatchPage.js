import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import DatePicker from '../../ReusableComp/DatePicker/DatePicker';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './DispatchPage.css';

class Dispatch extends Component {
    state = {
        employee_id: '',
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

    render(){
        const newDateArr = this.props.store.setAllNew.map((item, index)=>{
            if(this.props.store.setDate.date === item.date) {
            return (
                <div key={index} className="style">
                    <span>{item.id}</span>
                    <span>{item.service} {item.customer_id} {item.notes}</span>
                    <span>{item.date}</span>
                    <span>{item.status} {item.total_due}</span>
                    <button>Dispatch</button>
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
                    <button>Remove</button>
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
                    <select onChange={(event) => this.setState({ employee_id: event.target.value })}>
                        <option value="">Choose Technician</option>
                            <option value="1">Luke</option>
                            <option value="3">Josh</option>
                        </select>
                        <button onClick={this.changeTech}>Choose Tech</button>
                <div>
                    {newDateArr}
                </div> 
                <br/>
                <br/>
                <br/>
                <div>
                    { orderByTechArr}
                </div>
                </div>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Dispatch);

