'use strict'

const db = require('../server/db')
const {User, Game, Role, Action, Script} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({name: 'Player1'}),
    User.create({name: 'Player2'})
  ])

  const roles = await Promise.all([
    Role.create({name: 'Civilian'}),
    Role.create({name: 'Mafia'}),
    Role.create({name: 'Doctor'})
  ])

  const actions = await Promise.all([
    Action.create({phase: 'day', timer: 300, move: 1})
  ])

  const scripts = await Promise.all([
    Script.create({
      id: 1,
      script: `It's time to get to know each other.  Everyone, close your eyes.`
    }),
    Script.create({
      id: 2,
      script: `Mafia, open your eyes.  Choose someone to kill.`
    }),
    Script.create({
      id: 3,
      script: `Detective, open your eyes.  Choose someone to inspect.`
    }),
    Script.create({
      id: 4,
      script: `Doctor, open your eyes.  Choose someone to save.`
    }),
    Script.create({
      id: 5,
      script: `Everyone wake up.  Last night, someone was murdered.`
    }),
    Script.create({
      id: 6,
      script: `Choose the killer.`
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${roles.length} roles`)
  console.log(`seeded ${actions.length} roles`)
  console.log(`seeded ${scripts.length} roles`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
