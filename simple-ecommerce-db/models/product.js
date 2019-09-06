'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProductModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('product', {
    name: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      unique: true,
      allowNull: false
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false
    },
    preSale: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isNew: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
