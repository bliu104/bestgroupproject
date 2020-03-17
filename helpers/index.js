const jwt = require('jsonwebtoken')
const TOKEN_KEY = 'areallylonggoodkey'

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    const data = jwt.verify(token, TOKEN_KEY)
    console.log('hi')
    console.log('data', data)
    res.locals.user = data
    next()
  } catch (error) {
    // console.log(error)
    res.status(403).send('Unauthorized')
  }
}