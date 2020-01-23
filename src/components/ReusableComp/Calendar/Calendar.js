import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Inject, Day, Week, WorkWeek, Month, Agenda,ScheduleComponent} from '@syncfusion/ej2-react-schedule';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class Calendar extends Component {
    

    render() {
        return (
            <ScheduleComponent style={{ padding:"10px", margin:"50px",width: '50%'}}>
                <Inject services={[Month, Agenda,Day, Week, WorkWeek]} />
            </ScheduleComponent>
        );
    }
}

export default connect(mapStoreToProps)(Calendar);