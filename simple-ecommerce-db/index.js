'use strict'

const setupDatabase = require('./lib/db')
const setupStoreModel = require('./models/store')
const setupProductModel = require('./models/product')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const StoreModel = setupStoreModel(config)
  const ProductModel = setupProductModel(config)

  StoreModel.hasMany(ProductModel)
  ProductModel.belongsTo(StoreModel)

  await sequelize.authenticate()

  sequelize.sync()

  const Store = {}
  const Product = {}

  return {
    Store,
    Product
  }
}
