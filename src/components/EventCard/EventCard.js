import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import { Delete } from '@material-ui/icons';
import moment from 'moment';
import '../EventCard/EventCard.css';


class EventCard extends Component {

    handleCancelEvent = () => {
        console.log(this.props.event);
        this.props.dispatch({
            type: 'CANCEL_EVENT',
            payload: this.props.event
        })
    } 

    handleJoinEvent = (event) => {
        // event.preventDefault();
        console.log(this.props.event.id);
        console.log(event);
        this.props.dispatch({
            type: 'ATTEND_EVENT',
            payload: event,
        });
    }

    render(){
        return(
            <Card className="allEvents">
              <Grid container spacing={12} xs={12}>
                  {/* <Grid item xs={2}>
                    <div id="deviceMore"><Button ><Icon>expand_more</Icon></Button></div>
                  </Grid> */}
                  <Grid className="myEventCards"item>
                      <div className="deviceName">
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
                      </div>
                  </Grid>
                  <Grid item xs={12}>
                      <div id="join"><Button variant="raised" color="secondary" onClick={() => this.handleJoinEvent(this.props.event)}>Join</Button></div>
                  </Grid>
                  <Grid item xs={2}>
                    <div id="deviceDelete"><IconButton color="dark" onClick={this.handleCancelEvent}><Delete /></IconButton></div>
                  </Grid>
              </Grid>
            </Card>
           
        )
    }
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(EventCard);


