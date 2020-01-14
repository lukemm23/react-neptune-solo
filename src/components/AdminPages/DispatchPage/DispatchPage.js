import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class Dispatch extends Component {
    

    render() {
        return (
            <div>
                <SideNav history={this.props.history}/>
                <h2>Dispatch Page</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Dispatch);