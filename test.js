const hyperpino = require('./')
const level = require('level')

const db = level('test.db')

const log = hyperpino(db, {
  name: 'test'
})

log.info('this is a test')
log.info('yo')
