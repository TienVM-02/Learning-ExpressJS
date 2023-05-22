const express = require('express')
const menuRoute = express.Router()
const {getAllMenu, getDetailMenu} = require('../controller/menu_controller')

menuRoute.get('/', getAllMenu)

menuRoute.get('/:id', getDetailMenu)


module.exports = {
    menuRoute
}

/*
    BT: 1. viết api get all cate: localhost:3000/api/v1/category/   GET
        2. viết api tạo 1 cate: localhost:3000/api/v1/category/     POST
        3. viet api update cate: localhost:3000/api/v1/category/    PUT
*/