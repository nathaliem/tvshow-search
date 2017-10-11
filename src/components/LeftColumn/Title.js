import React, { Component } from 'react';
import './Title.css';

class Title extends Component {

    render() {
        if (this.props.selectedShowName) {
            return (
                <div className="title">
                    <h1>{this.props.selectedShowName}</h1>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Title;