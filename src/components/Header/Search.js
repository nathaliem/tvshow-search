import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shows: [],
        };
    }

    componentDidMount() {
        this.getListOfShows();
    }

    getListOfShows(keywords = '') {
        fetch('https://api.tvmaze.com/search/shows?q=' + keywords).then(response => response.json())
            .then(data => {
                this.setState({shows: data});
            });
    }

    onChange(e) {
        const keys = e.target.value;
        this.getListOfShows(keys);
        if ( this.state.shows.length !== 0 ) {
            this.showListOfShows();
        }
    }

    onSelect(id, e) {
        e.preventDefault();
        this.props.updateSelectedShow(id);
        this.hideListOfShows();
    }

    onBlur(e) {
        /**
         * @TODO: Hide Shows dropdown when clicking outside the search field
         */
    }

    showListOfShows() {
        document.querySelector('.list-of-shows').classList.add('show');
    }

    hideListOfShows() {
        document.querySelector('.list-of-shows').classList.remove('show');
    }

    render() {
        const shows = this.state.shows.filter(function(item){
            return item.show.image && item.show.externals.thetvdb;
        }).map((item, i) => (
            <div className="show--item" key={item.show.id}>
                <a href="#" onClick={this.onSelect.bind(this, item.show.externals.thetvdb)}><span>Click</span></a>
                <img src={ item.show.image.medium } alt={ item.show.name } />
                <span>{ item.show.name }</span>
            </div>
        ));

        return (
            <div onClick={this.onBlur.bind(this)}>
            <input type="search" placeholder="Search for a show..." onFocus={this.onChange.bind(this)} onChange={this.onChange.bind(this)} />
            <div className="list-of-shows">{ shows }</div>
            </div>
        );
    }
}

export default Search;