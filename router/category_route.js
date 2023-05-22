const express = require('express')
const categoryRoute = express.Router()

const {getAllCate, addCategory, updateById} = require('../controller/category_controller')

categoryRoute.get('/', getAllCate)
categoryRoute.post('/',addCategory)
categoryRoute.put('/', updateById)

module.exports = {
    categoryRoute
}