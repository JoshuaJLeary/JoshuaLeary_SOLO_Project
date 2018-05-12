import React, { Component } from 'react';


class EventItem extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.golfer.name}</h4>
                <p>{this.props.golfer.city}</p>
                <p>{this.props.golfer.skill}</p>
                <p>{this.props.golfer.bio}</p>
             </div>
        )
    }
}

export default EventItem;