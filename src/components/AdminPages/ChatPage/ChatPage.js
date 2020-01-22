import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Map from '../../ReusableComp/Map/Map';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class Chat extends Component {
    

    render() {
        return (
            <div>
                <SideNav history={this.props.history}/>
                <h2>Chat Page</h2>
                <Map />
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Chat);