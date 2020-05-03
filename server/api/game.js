const router = require('express').Router()
const {Game} = require('..db/models')

router.post('/', async (req, res, next) => {
  try {
    const newGame = await Game.create()
    res.json(newGame)
  } catch (err) {
    next(err)
  }
})

module.exports = router
