const Sequelize = require('sequelize')
const db = require('../db')

const Script = db.define('script', {
  script: {
    type: Sequelize.TEXT
  }
})

module.exports = Script
