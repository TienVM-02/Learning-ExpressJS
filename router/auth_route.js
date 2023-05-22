const express = require('express')
const authRoute = express.Router()
const {signUp, signIn, checkAuthen} = require('../controller/auth_controller')

authRoute.post('/signup', signUp)
authRoute.post('/signin', signIn)
authRoute.get('/checkAuth', checkAuthen)
module.exports = {
    authRoute
}