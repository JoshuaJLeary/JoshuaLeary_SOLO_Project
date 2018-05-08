import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import '../EventCard/EventCard.css';


class EventCard extends Component {

    handleJoinEvent = (event) => {
        // event.preventDefault();
        console.log(this.props.event.id);
        this.props.dispatch({
            type: 'ATTEND_EVENT',
            payload: event,
        });
    }

    render(){
        return(
            <Card className="allEvents">
              <Grid zeroMinWidth container spacing={16}>
                  {/* <Grid item xs={2}>
                    <div id="deviceMore"><Button ><Icon>expand_more</Icon></Button></div>
                  </Grid> */}
                  <Grid className="myEventCards"item xs={8}>
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
                            <p>{this.props.event.tee_time}</p>
                        </div>
                      </div>
                  </Grid>
                  <Grid item xs={2}>
                      <div id="join"><Button variant="raised" color="primary" onClick={() => this.handleJoinEvent(this.props.event)}>Join</Button></div>
                  </Grid>
                  {/* <Grid item xs={2}>
                    <div id="deviceDelete"><Button color="secondary"><Icon>delete</Icon></Button></div>
                  </Grid> */}
              </Grid>
            </Card>
           
        )
    }
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(EventCard);

