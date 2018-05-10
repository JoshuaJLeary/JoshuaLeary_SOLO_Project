import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateEventPage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            address: '',
            phone: '',
            date: '',
            teeTime: ''
        }
    }

handleChangeFor = propertyName => (event) => {
    this.setState({
        ...this.state,
        [propertyName]: event.target.value,
    });
}

eventDetails = (event) => {
    event.preventDefault();
    console.log('state:', this.state);
    this.props.dispatch({
        type: 'SET_EVENT',
        payload: this.state,
    })
    this.props.history.push('info');

}


    render() {
        return(
            <div>
                <div>
                <TextField
                id="name"
                label="Event Name"
                value={this.state.name}
                onChange={this.handleChangeFor('name')}
                margin="normal"
                 />
                 </div>
                 <div>
                 <TextField
                 id="course"
                 label="Golf Course Name" 
                 value={this.state.course}
                 onChange={this.handleChangeFor('course')}
                 margin="normal"
                 />
                 </div>
                 <div>
                 <TextField 
                 id="address"
                 label="Golf Course Address"
                 value={this.state.address}
                 onChange={this.handleChangeFor('address')}
                 margin="normal"
                 />
                 </div>
                 <div>
                 <TextField 
                 id="phone"
                 label="Golf Course Phone"
                 value={this.state.phone}
                 onChange={this.handleChangeFor('phone')}
                 margin="normal"
                 />
                 </div>
                 <div>
                 <TextField
                    id="date"
                    label="Event Date"
                    type="date"
                    value={this.state.date}
                    defaultValue="2018-05-05"
                    onChange={this.handleChangeFor('date')}
                    InputLabelProps={{
                        shrink: true,
                      }}
                 />
                 </div>
                 <div>
                 <TextField
                    id="time"
                    label="Tee-Time"
                    type="time"
                    defaultValue="07:00"
                    value={this.state.teeTime}
                    onChange={this.handleChangeFor('teeTime')}
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
                </div>
                <div>
                 {/* <TextField 
                 id="teeTime"
                 label="Tee Time"
                 value={this.state.teeTime}
                 onChange={this.handleChangeFor('teeTime')}
                 margin="normal"
                 /> */}
                 <Button variant="raised" color="secondary" onClick={this.eventDetails}>
                    Create Event
                 </Button>
                 </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({state});


export default connect(mapStateToProps)(CreateEventPage);