import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import MyEventCard from '../MyEventCard/MyEventCard';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import MyProfile from '../MyProfile/MyProfile';
import '../UserPage/UserPage.css';


const mapStateToProps = state => ({
  user: state.user,
  state: state
});

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: 'GET_GOLFER'});
    this.props.dispatch({ type: 'GET_MY_EVENTS'});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    // let showMyGolfers = this.props.state.attendingEvent.map((player) => {
      
    // })

    let showMyEvents = this.props.state.myEvents.map((event) => {
      console.log(this.props);
      console.log('event:', event);
      return <MyEventCard event={event}/>
    })

    return (
      <div className="wrapUpcoming">
        <Nav />
        { content }
 
        { this.props.user.userName &&
          <div className="userPage__container">
            {/* <h1 id="welcome">Welcome, { this.props.user.userName }</h1> */}

            <MyProfile />

            <h3 className="listName">Here is a list of your upcoming Events:</h3>

            {showMyEvents}

            <button className="logoutBtn" type="button" onClick={this.logout}>
              Log Out
            </button>
          </div>
        }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

