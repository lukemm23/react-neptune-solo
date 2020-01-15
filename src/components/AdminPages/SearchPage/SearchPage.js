import React, { Component } from 'react';
import SideNav from '../../ReusableComp/SideNav/SideNav';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import SearchTool from '../../ReusableComp/SearchTool/SearchTool';
import './Search.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class Search extends Component {
   
    
    render() {
       
        return (
            <div>
                <SideNav/>
                <h2>Search Page</h2>
                <SearchTool />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Search);