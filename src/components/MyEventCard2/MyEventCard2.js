import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import moment from 'moment';
import IconButton from 'material-ui/IconButton';
import { Delete } from '@material-ui/icons';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class MyEventCard2 extends Component {

    cancelEvent = () => {
        this.props.dispatch({
            type: 'LEAVE_EVENT',
            payload: this.props.event
        })
    }
    

    render() {
        function FullWidthGrid(props) {
            const { classes } = this.props;
        return (
            <div className={root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={paper}>
          <div>
            <h4>{this.props.event.event_name}</h4>
            </div>
            <div>
                <p>{this.props.event.course_name}</p>
            </div>
            <div>
                <p>{this.props.event.course_address}</p>
            </div>
            <div>
                <p>{this.props.event.couse_phone}</p>
            </div>
            <div>
                <p>{moment(this.props.event.event_date).format('MM/DD/YYYY')}</p>
            </div>
            <div>
                <p>{this.props.event.tee_time}</p>
            </div>
            <div>
            <IconButton onClick={this.cancelEvent}><Delete /></IconButton>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
        )
    }
    }
}

const mapStateToProps = state => ({
    user: state.user,
    state: state
  });

export default connect(mapStateToProps)(MyEventCard2);