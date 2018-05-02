import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'material-ui/Icon';

class CreateEventButton extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <Button size="" variant="fab" color="primary" aria-label="add">
                <AddIcon />
                </Button>
            </div>
        )
    }
}

export default CreateEventButton;