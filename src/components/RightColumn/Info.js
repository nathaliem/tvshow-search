import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info_obj = this.props.selectedShowInfo;
        let genres, network, officialSite, premiered, runtime, status, summary = null;
        if ( info_obj.genres ) {
            genres = info_obj.genres.map((item, i) => (
                <li key={i}>{item}</li>
            ));
        }
        if ( info_obj.network ) {
            network = (
                <li>{info_obj.network.name}</li>
            );
        }
        if ( info_obj.officialSite ) {
            officialSite = (
                <li><a href={info_obj.officialSite} target="_blank">Official website</a></li>
            );
        }
        if ( info_obj.premiered ) {
            premiered = (
                <li>{info_obj.premiered}</li>
            );
        }
        if ( info_obj.runtime ) {
            runtime = (
                <li>{info_obj.runtime}</li>
            );
        }
        if ( info_obj.status ) {
            status = (
                <li>{info_obj.status}</li>
            );
        }

        return (
            <div className="info">
                <ul>
                    <ul className="genres">{genres}</ul>
                    {network}
                    {officialSite}
                    {premiered}
                    {runtime}
                    {status}
                </ul>
            </div>
        )
    }
}

export default Info;