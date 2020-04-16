import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const[tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 useEffect(()=> {
  const callAPI = () => {
    fetch("https://api.napster.com/v2.1/tracks/top?apikey=NmFmMTU4M2YtOTA4Mi00YzAzLWEyZDUtNTczMTYwMmNjZGFk")
    .then(res => res.json())
    .then(json=> {
      console.log(json)
      setTracks(json)
    })
    setIsLoading(false)
    }
    callAPI()
  }, [])

  const renderMusic = tracks.map((track,index)=> {
    return(
      <li>{track.name} {track.artistName}</li>

    )
  })
  return (
    <div className="App">
      <h1>Display music tracks</h1>
    {!isLoading && renderMusic}
    </div>
  );
}

export default App;
