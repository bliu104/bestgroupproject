const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers/index')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.post('/change-password', controllers.changePassword)
router.get('/users', controllers.getAllUsers)
router.get('/user/:id', controllers.getUserById)
router.get('/items', controllers.getAllItems)
router.get('/items/:id', controllers.getItemById)
router.post('/items', controllers.createItem)
router.put('/items/:id', controllers.updateItem)
router.delete('/items/:id', controllers.deleteItem)
router.get('/verify', controllers.verifyUser)

module.exports = router