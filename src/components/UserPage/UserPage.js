import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import MyEventCard from '../MyEventCard/MyEventCard';


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
    let myGolf = this.props.state.golfProfile.map((golfer) => {
      console.log(this.props);
      console.log('golfer:', golfer);
      return <ul>
              <li>{golfer.name}</li>
              <li>{golfer.city}</li>
              <li>{golfer.skill}</li>
              <li>{golfer.bio}</li>
            </ul>
    })

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
            Welcome, { this.props.user.userName }!
          </h1>
          <div>
            {myGolf}
            </div>
            <div>
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

