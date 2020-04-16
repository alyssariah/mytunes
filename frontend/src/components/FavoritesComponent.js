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

    const handleDelete = async(id) =>{
        const json = await deleteFavorite(id)
        console.log("delete", json)
        const favArr = favorites.filter(fav => fav._id !== id);
        setFavorites(favArr);
    }

    const renderFavorites= favorites.map((track,index)=> {
        return(
          <div className="musicTrack" key={index}>
            <h3>{track.Song} </h3> 
            <p>Artist: {track.Artist}</p>
            <p>Album: {track.Album}</p>
            <a href={track.Preview}>Listen to preview</a>
            <button onClick={()=> handleDelete(track._id)}>Delete</button>
          </div>
        )
      })
    return (
        <>
        <h1>Favorites</h1>
            <div className="favoriteTracks">
                {!isLoading && renderFavorites}
            </div>
        </>
    )
}

export default Favorites