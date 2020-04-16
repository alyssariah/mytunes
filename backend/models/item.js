const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
        Song: String,
        Artist: String,
        Album: String,
        Preview: String
})

const Item = mongosse.model('Songs', ItemSchema)
module.exports= Item

// (
//     <div className="musicTrack" key={index}>
//       <h3>{track.name} <i class="far fa-star"></i></h3> 
//       <p>Artist: {track.artistName}</p>
//       <p>Album: {track.albumName}</p>
//       <a href={track.previewURL}>Listen to preview</a>
//     </div>
//   )