import React, {useEffect, useState} from 'react'
import {getAllFavorites, deleteFavorite, createFavorite} from "../services/api-helper"

function Favorites() {
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsloading] = useState(true);
    
    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllFavorites();
            // console.log('useEffect - resp', resp)
            setFavorites(resp);
            setIsloading(false);
        };
        makeAPICall();
    }, []);

    const renderFavorites= favorites.map((track,index)=> {
        return(
          <div className="musicTrack" key={index}>
            <h3>{track.Song} <i class="far fa-star"></i></h3> 
            <p>Artist: {track.Artist}</p>
            <p>Album: {track.Album}</p>
            <a href={track.previewURL}>Listen to preview</a>
          </div>
        )
      })
    return (
        <>
            <div className="favoriteTracks">
                <h2>Favorites</h2>
                {!isLoading && renderFavorites}
            </div>
        </>
    )
}

export default Favorites