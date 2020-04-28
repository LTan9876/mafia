const Sequelize = require('sequelize')
const db = require('../db')

const Action = db.define('action', {
  phase: {
    type: Sequelize.STRING,
    allowNull: false
  },
  timer: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  move: {
    type: Sequelize.INTEGER
  },
  elminated: {
    type: Sequelize.STRING
  }
})

module.exports = Action
