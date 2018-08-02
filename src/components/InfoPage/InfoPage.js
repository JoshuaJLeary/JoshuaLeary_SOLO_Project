import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import CreateEventButton from '../CreateEventButton/CreateEventButton';
import EventCard2 from '../EventCard2/EventCard2';
import '../InfoPage/InfoPage.css';


const mapStateToProps = state => ({
  user: state.user,
  state: state,
});

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    this.props.dispatch({type: 'GET_EVENT'});
    this.props.dispatch({type: 'GET_ATTENDING'});

  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;
    let showEvents = this.props.state.createdEvent.map((event) => {
      return <EventCard2 event={event}/>
    })

    if (this.props.user.userName) {
      content = (
        <div>
          {/* <p>
            Golf Events
          </p> */}
          <CreateEventButton />

        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
        <div className="wrap">
        {showEvents}
        </div>
      </div>
      
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
