import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import moment from 'moment';
import IconButton from 'material-ui/IconButton';
import { Delete } from '@material-ui/icons';
import { connect } from 'react-redux';
import '../MyEventCard/MyEventCard.css';


// const styles = theme => ({
//     root: {
//       flexGrow: '1',
//       width: '50%',
//       margin: 'auto',
//     },
//     paper: {
//       height: '140px',
//       width: '100px',
//     },
//     control: {
//       padding: theme.spacing.unit * 2,
//     },
//   });
  

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

                  {/* <Grid item xs={2}>
                    <div id="deviceMore"><Button ><Icon>expand_more</Icon></Button></div>
                  </Grid> */}
                      <div className="cardText">
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
                  {/* <Grid item xs={2}>
                      <div id="deviceEdit"><Button color="primary">Edit</Button></div>
                  </Grid> */}
                  {/* <Grid item xs={2}>
                    <div id="deviceDelete"><Button color="secondary"><Icon>delete</Icon></Button></div>
                  </Grid> */}
                </Card>

        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    state: state
  });



export default connect(mapStateToProps)(MyEventCard);