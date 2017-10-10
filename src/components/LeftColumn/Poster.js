import React, { Component } from 'react';

class Poster extends Component {
    render() {
        return(
            <img src={this.props.selectedShowImage} alt={this.props.selectedShowName} />
        )
    }
}

export default Poster;