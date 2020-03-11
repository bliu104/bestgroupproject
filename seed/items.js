const db = require('../db')
const Item = require('../models/item')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const item = new Item(
    {
      title: 'fan',
      image_url: '',
      description: 'A very nice fan',
      rating: '5',
      price: '100',
      color: 'White',
    }
  )
  await item.save()
  console.log("Created items!")
}

const run = async () => {
  await main()
  db.close()
}

run()