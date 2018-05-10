import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import moment from 'moment';
import IconButton from 'material-ui/IconButton';
import { Delete } from '@material-ui/icons';
import { connect } from 'react-redux';
import '../MyEventCard/MyEventCard.css';


class MyEventCard extends Component {

cancelEvent = () => {
    this.props.dispatch({
        type: 'LEAVE_EVENT',
        payload: this.props.event
    })
}

    render() {
        return (
            <Card className="myEventCard">
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
                            <p>{moment(this.props.event.event_date).format('MM/DD/YYYY')}</p>
                        </div>
                        <div>
                            <p>{this.props.event.tee_time}</p>
                        </div>
                        <div>
                        <IconButton onClick={this.cancelEvent}><Delete /></IconButton>
                        </div>
                      </div>
                  </Grid>
                  {/* <Grid item xs={2}>
                      <div id="deviceEdit"><Button color="primary">Edit</Button></div>
                  </Grid> */}
                  {/* <Grid item xs={2}>
                    <div id="deviceDelete"><Button color="secondary"><Icon>delete</Icon></Button></div>
                  </Grid> */}
              </Grid>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    state: state
  });

export default connect(mapStateToProps)(MyEventCard);