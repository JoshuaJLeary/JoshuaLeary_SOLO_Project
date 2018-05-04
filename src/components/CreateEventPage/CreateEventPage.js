import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
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
    this.props.dispatch({
        type: 'SET_EVENT',
        payload: this.state,
    })
    this.props.history.push('info');

}


    render() {
        return(
            <div>
              <form onSubmit={this.eventDetails}>
                <TextField
                id="name"
                label="Event Name"
                value={this.state.name}
                onChange={this.handleChangeFor('name')}
                margin="normal"
                 />
                 <TextField
                 id="course"
                 label="Golf Course Name" 
                 value={this.state.course}
                 onChange={this.handleChangeFor('course')}
                 margin="normal"
                 />
                 <TextField 
                 id="address"
                 label="Golf Course Address"
                 value={this.state.address}
                 onChange={this.handleChangeFor('address')}
                 margin="normal"
                 />
                 <TextField 
                 id="phone"
                 label="Golf Course Phone"
                 value={this.state.phone}
                 onChange={this.handleChangeFor('phone')}
                 margin="normal"
                 />
                 <TextField 
                 id="teeTime"
                 label="Tee Time"
                 value={this.state.teeTime}
                 onChange={this.handleChangeFor('teeTime')}
                 margin="normal"
                 />
                 <input
                    type="submit"
                    name="submit"
                    value="Create"
                 />
              </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({state});


export default connect(mapStateToProps)(CreateEventPage);