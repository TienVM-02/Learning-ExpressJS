const express = require('express')
const userRoute = express.Router()
const {getAllUser, insertUser, findById} = require('../controller/user_controller')
const {checkAuthen} = require('../controller/auth_controller')

userRoute.get('/', checkAuthen, getAllUser)
userRoute.post('/', insertUser)
userRoute.get('/:id', findById)


module.exports = {
    userRoute
}
