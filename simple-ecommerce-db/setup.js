'use strict'

const debug = require('debug')('simple-ecommerce:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'my_ecommerce',
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'adminPassword',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()
