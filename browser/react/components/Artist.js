import React from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums';
import axios from 'axios';
import initialState from '../initialState';
import {Link, Router, Route} from 'react-router';

export default class Artist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           albums: [],
            songs: []
        };



    }


    componentDidMount() {
        const artistId = this.props.params.artistId;
        this.props.selectArtist(artistId); // function to find artist and setstate
        this.props.getAlbums(artistId);
        this.props.getSongs(artistId);
        console.log("......", this.props.artistAlbums);
    }




    render(){

        const artist = this.props.artist;
        const children = this.props.children;
        const propsToPassToChildren = {
            artist: this.props.artist,
            currentSong: this.props.currentSong,
            isPlaying: this.props.isPlaying,
            toggleOne: this.props.toggleOne
        };

        return <div>
            <h3>{ artist.name }</h3>
            <ul className="nav nav-tabs">
                <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
                <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
            </ul>
            { children && React.cloneElement(children, propsToPassToChildren) }
            <Albums
                albums={this.props.artistAlbums}
                selectAlbum={this.props.getAlbums}
            />
        </div>;
    }

}

