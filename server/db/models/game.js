const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  inSession: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Game
