


<div className="artist">
    <div>
    <h3>{ artist.name }</h3>
</div>

<div className="album row">

    {
        this.props.artistAlbums.map(album => {
            console.log("aaaaa", album);
            return (
                <div key={album.id} className="col-xs-4" >
                    <h3>{ album.name }</h3>
                    <Link to={`/albums/${album.id}`}>
                        <img src={ album.imageUrl } className="img-thumbnail" />
                    </Link>
                </div>

            )//end of return
        })// end of map
    }
</div>

<Songs
    songs={this.props.songs}
    currentSong={currentSong}
    isPlaying={isPlaying}
    toggleOne={toggleOne} />
</div>