'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProductModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('store', {
    uuid: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    slogan: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    about: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
