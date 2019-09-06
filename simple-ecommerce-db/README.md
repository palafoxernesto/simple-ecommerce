# simple-ecommerce-db

## Usage

```js
const setupDatabase = require('store-db')

setupDatabase(config).then(db =>  {
  const { Store, Product } = db
}).catch(err => console.error(err))
```