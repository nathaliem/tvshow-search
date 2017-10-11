import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
    render() {
        return (
            <div className="rating">
                <span>{ this.props.selectedShowRating }</span> / 10
            </div>
        )
    }
}

export default Rating;