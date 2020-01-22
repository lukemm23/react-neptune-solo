import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class DatePicker extends Component {
    state = {
        date: '',
    };

    changeDate = (event) => {  
        this.props.dispatch({
            type: 'SET_DATE',
            payload: this.state.date
        })
      }

    render() {
        return (
            <div>
                <InputLabel>Select Date</InputLabel>
                <Select style={{height: '4.6vh', width: '28%' }} variant="outlined" onChange={(event) => this.setState({ date: event.target.value })}>
                        <MenuItem value="">Choose Date</MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="7">7</MenuItem>
                            <MenuItem value="8">8</MenuItem>
                            <MenuItem value="9">9</MenuItem>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="11">11</MenuItem>
                            <MenuItem value="12">12</MenuItem>
                            <MenuItem value="13">13</MenuItem>
                            <MenuItem value="14">14</MenuItem>
                            <MenuItem value="15">15</MenuItem>
                            <MenuItem value="16">16</MenuItem>
                            <MenuItem value="17">17</MenuItem>
                            <MenuItem value="18">18</MenuItem>
                            <MenuItem value="19">19</MenuItem>
                            <MenuItem value="20">20</MenuItem>
                            <MenuItem value="21">21</MenuItem>
                            <MenuItem value="22">22</MenuItem>
                            <MenuItem value="23">23</MenuItem>
                            <MenuItem value="24">24</MenuItem>
                            <MenuItem value="25">25</MenuItem>
                            <MenuItem value="26">26</MenuItem>
                            <MenuItem value="27">27</MenuItem>
                            <MenuItem value="28">28</MenuItem>
                            <MenuItem value="29">29</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="31">31</MenuItem>
                        </Select>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" color="primary" onClick={this.changeDate}>Choose Date</Button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(DatePicker);