import React, { Component } from 'react';
import './Info.css';

class Info extends Component {

    render() {
        const info_obj = this.props.selectedShowInfo;
        let genres, network, officialSite, premiered, runtime, status = null;
        if ( info_obj.genres ) {
            genres = info_obj.genres.map((item, i) => (
                <li key={i}>{item}</li>
            ));
        }
        if ( info_obj.network ) {
            network = (
                <li><h2>Network</h2>{info_obj.network.name}</li>
            );
        }
        if ( info_obj.officialSite ) {
            officialSite = (
                <li><a href={info_obj.officialSite} target="_blank">Official website</a></li>
            );
        }
        if ( info_obj.premiered ) {
            const date = new Date(info_obj.premiered);
            const date_formatted = date.getDate() + '/' + (('0' + (date.getMonth() + 1)).slice(-2)) + '/' + date.getFullYear();

            premiered = (
                <li><h2>Premiere date</h2>{date_formatted}</li>
            );
        }
        if ( info_obj.runtime ) {
            runtime = (
                <li><h2>Runtime</h2>{info_obj.runtime} minutes</li>
            );
        }
        if ( info_obj.status ) {
            status = (
                <li><h2>Status</h2>{info_obj.status}</li>
            );
        }

        return (
            <div className="info">
                <ul>
                    {genres.length > 0 &&
                        <ul className="genres">
                            <h2>Genres</h2>
                            {genres}
                        </ul>
                    }
                    <div className="various-info">
                    {network}
                    {premiered}
                    {runtime}
                    {status}
                    {officialSite}
                    </div>
                </ul>
            </div>
        )
    }
}

export default Info;