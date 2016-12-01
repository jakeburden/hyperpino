const swarm = require('hyperdiscovery')
const hypecore = require('hypercore')
const pino = require('pino')

function hyperpino (db, opts) {

  const core = hypercore(db)
  const feed = core.createFeed()
  swarm(feed)
  
  const logger = pino(opts, feed)
  return logger
}

module.exports = hyperpino

