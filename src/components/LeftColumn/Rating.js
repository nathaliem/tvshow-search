import React, { Component } from 'react';

class Rating extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="rating">
                <span>{ this.props.selectedShowRating }</span> / 10
            </div>
        )
    }
}

export default Rating;