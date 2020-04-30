const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  inSession: {
    type: Sequelize.BOOLEAN
  },
  password: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Game
