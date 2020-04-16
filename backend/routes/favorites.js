const express = require('express')
const router = express.Router()

const Controller = require('../controller/favorites')

router.get('/', Controller.getAll)

router.post('/', Controller.createFavorite)

router.delete('/:id', Controller.deleteFavorite)


module.exports = router