import React, { Component } from 'react';
import '../EventItem/EventItem.css';


class EventItem extends Component {
    render() {
        return (
            <div>
                <strong>{this.props.golfer.name}</strong>
                <p>{this.props.golfer.city}</p>
                <p>{this.props.golfer.skill}</p>
                <p>{this.props.golfer.bio}</p>
             </div>
        )
    }
}

export default EventItem;