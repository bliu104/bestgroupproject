const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const user = new User(
    {
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password_digest: faker.random.uuid(),
    }
  )
  await user.dave()
  console.log("Created users!")
}
const run = async () => {
  await main()
  db.close()
}

run()