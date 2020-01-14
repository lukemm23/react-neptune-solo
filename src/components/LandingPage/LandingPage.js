import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

class LandingPage extends Component {
    state = {
        heading: 'Class Component',
    };

    onLogin = (event) => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="container">
                <h1>Neptune MS</h1>
                <div className="grid">
                    <div className="grid-col grid-col_8">
                        <p>
                            Neptune Management System provides a high level management platform for small-medium sized service-offering businesses. 
                            Neptune offers the solution in management service towards the most essential aspects of business. 
                        </p>
                        <h4>
                        The functionalities are listed below: 
                        </h4>
                        <ul>
                            <p>
                            Admin management platform
                            </p>
                            <li>
                            Control over personnel dispatching/scheduling using google map API to maximize outside-personnels’ work-load, efficiency, and work progression during the period of each business day.
                            </li>
                            <li>
                            Live chat forum for updates to outside-personnels incase of urgent changes to schedules and work notes. (stretch goal)
                            </li>
                            <li>
                            Parts inventory and sales management for all clients. 
                            </li>
                            <li>
                            Customer info data and notes, subscription updates, appointment setting and invoicing. 
                            </li>
                            <p>
                            Outside-personnel platform
                            </p>
                            <li>
                            Live update of daily work-load status urgent changes.
                            </li>
                            <li>
                            Daily appointment schedule and work route through google map API.
                            </li>
                            <li>
                            Live chat functionality to update admin/customer service personnel, and scheduling requests.(stretch goal)
                            </li>
                            <p>
                            Management platform
                            </p>
                            <li>
                            Access to all updates to personnel, product/service sales information.
                            </li>
                            <li>
                            Personnel performance indicator.(stretch)
                            </li>
                            <li>
                            Employee work scheduling, training scheduling.(stretch)
                            </li>
                        </ul>
                    </div>
                    <div className="grid-col grid-col_4">
                        <h3>Already a Member?</h3>
                        <button
                            className="btn btn_sizeFull"
                            onClick={this.onLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
