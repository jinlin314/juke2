import React from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import initialState from '../initialState';

export default class Ablum extends React.Component {
    constructor(props){
        super(props);
        this.state ={};
    }


    componentDidMount() {
        const albumId = this.props.params.albumId;
        this.props.selectAlbum(albumId);

    }

 render(){
     let album = this.props.album;
     let currentSong = this.props.currentSong;
     let isPlaying = this.props.isPlaying;
     let toggleOne = this.props.toggleOne;

     return (

         <div className="album">
             <div>
                 <h3>{ album.name }</h3>
                 <img src={ album.imageUrl } className="img-thumbnail" />
             </div>
             <Songs
                 songs={album.songs}
                 currentSong={currentSong}
                 isPlaying={isPlaying}
                 toggleOne={toggleOne} />
         </div>
     );
 }
}

