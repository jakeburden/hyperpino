const swarm = require('hyperdiscovery')
const hypercore = require('hypercore')
const pino = require('pino')

function hyperpino (db, opts) {
  db.close()
  
  const core = hypercore(db)
  const feed = core.createFeed()
  console.log(feed.key.toString('hex'))
  swarm(feed)

  const logger = pino(opts, feed.createWriteStream({ objectMode: false }))
  return logger
}

module.exports = hyperpino
