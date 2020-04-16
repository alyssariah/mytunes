const Favorite = require ('../models/item')

Favorite.find({}).remove(() => {
    let taylor = Favorite.create({
        Song: "Toosie Slide",
	    Artist: "Drake",
	    Album: "Drake",
	    Preview: "https://us.napster.com/artist/drake/album/toosie-slide-single/track/toosie-slide"
    }).then(() => process.exit())
})