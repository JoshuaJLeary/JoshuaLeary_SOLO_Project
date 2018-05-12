import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventItem from '../EventItem/EventItem';
import Button from 'material-ui/Button';

const mapStateToProps = state => ({state});

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  });

class EventCard2 extends Component {
    // componentDidMount() {
    //     this.props.dispatch({type: 'FETCH_ATTENDING'});
    //   }

    handleJoinEvent = (event) => {
        // event.preventDefault();
        console.log(this.props.event.id);
        console.log(event);
        this.props.dispatch({
            type: 'ATTEND_EVENT',
            payload: event,
        });
    }
    render() {
        let allGolfers = this.props.state.attendingReducer;
        console.log('allGolfer:', allGolfers);
        let golferList = allGolfers.filter(golfer => golfer.event_id === this.props.event.id);
        console.log('golferList:', golferList);
        let someGolfer = golferList.map( (golfer) => {
            console.log('someGolfer:', golfer);
            return <EventItem golfer={golfer}/>
        })
        const { classes } = this.props;
        return (
            <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary className="expansion" expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{this.props.event.event_name}</Typography>
          <span><Typography>{this.props.event.course_name}</Typography></span>
        </ExpansionPanelSummary>
        <Button variant="raised" color="secondary" onClick={() => this.handleJoinEvent(this.props.event)}>Join</Button>
        <ExpansionPanelDetails>
          <Typography>
            {someGolfer}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
        )
    }
}

const expansionPanel = withStyles(styles)(EventCard2);

export default connect(mapStateToProps)(expansionPanel);
