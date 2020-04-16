import React, {useState, useEffect} from 'react';
import {createFavorite} from "../services/api-helper"


function AllSongs(){

    const[tracks, setTracks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   useEffect(()=> {
    const callAPI = () => {
      fetch("https://api.napster.com/v2.2/genres/g.397/tracks/top?limit=50&apikey=NmFmMTU4M2YtOTA4Mi00YzAzLWEyZDUtNTczMTYwMmNjZGFk")
      .then(res => res.json())
      .then(json=> {
        console.log(json)
        setTracks(json.tracks)
      })
      setIsLoading(false)
      }
      callAPI()
    }, [])
    // console.log(" here are the tracks in app.js", tracks)

    const handleCreate = async(track) => {
        const json = await createFavorite({"Song": track.name, "Artist": track.artistName, "Album": track.albumName, "Preview": track.previewURL});
        console.log(json)
    }
    const renderMusic = tracks.map((track,index)=> {
        return(
          <div className="musicTrack" key={index}>
            <h3>{track.name} <span onClick={()=>handleCreate(track)} ><i className="far fa-star"></i></span></h3> 
            <p>Artist: {track.artistName}</p>
            <p>Album: {track.albumName}</p>
            <a href={track.previewURL}>Listen to preview</a>
          </div>
        )
      })
return(
    <div className="AllSongs">
      <h1>Top Tracks</h1>
      <div className="topTracks">
        {!isLoading && renderMusic}
      </div>
    </div>

    
)}
export default AllSongs


