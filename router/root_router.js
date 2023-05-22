const express = require('express')
const rootRouter = express.Router()
const { menuRoute } = require('./menu_route')
const {categoryRoute} = require('./category_route')
const {userRoute} = require('./user_route')
const {authRoute} = require('./auth_route')

rootRouter.use('/menu', menuRoute)
rootRouter.use('/category', categoryRoute)
rootRouter.use('/user', userRoute)
rootRouter.use('/auth', authRoute)

module.exports = {
    rootRouter
}