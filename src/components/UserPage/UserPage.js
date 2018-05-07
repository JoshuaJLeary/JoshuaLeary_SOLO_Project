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

    let showMyEvents = this.props.state.myEvents.map((event) => {
      console.log(this.props);
      console.log('event:', event);
      return <MyEventCard event={event}/>
    })

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }
          </h1>
          <div>
            <MyProfile />
            </div>
            <div>
            <h3>Here is a list of your upcoming Events:</h3>
              {showMyEvents}
              </div>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

