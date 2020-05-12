const Sequelize = require('sequelize')
const db = require('../db')
const crypto = require('crypto')

const Game = db.define('game', {
  inSession: {
    type: Sequelize.BOOLEAN
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  },
  status: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Game

Game.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

Game.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Game.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

Game.beforeCreate(setSaltAndPassword)
Game.beforeUpdate(setSaltAndPassword)
Game.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})
