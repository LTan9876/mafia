const User = require('./user')
const Game = require('./game')
const Role = require('./role')
const Action = require('./action')
const Script = require('./script')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Role.hasMany(User)
Game.hasMany(User)

Game.belongsToMany(Action, {through: 'Action_Game'})
Action.belongsToMany(Script, {through: 'Action_Script'})

module.exports = {
  User,
  Game,
  Role,
  Action,
  Script
}
