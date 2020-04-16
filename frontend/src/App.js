import React, {useState, useEffect} from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
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

  console.log("tracks", tracks)
  const renderMusic = tracks.map((track,index)=> {
    return(
      <div className="musicTrack" key={index}>
        <h3>{track.name} <i class="far fa-star"></i></h3> 
        <p>Artist: {track.artistName}</p>
        <p>Album: {track.albumName}</p>
        <a href={track.previewURL}>Listen to preview</a>
      </div>
    )
  })
  return (
    <>
    <HeaderComponent />
    <div className="App">
      <h1>Top Tracks</h1>
      <div className="topTracks">
        {!isLoading && renderMusic}
      </div>
    </div>
    <FooterComponent />
    </>
  );
}

export default App;
