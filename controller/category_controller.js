const { response } = require('express')
const {categoryData} = require('../constant')

const getAllCate = (req, res) => {
    res.status(200).send(categoryData)
}

const addCategory = (req, res) => {
    const category = req.body

    const newCateData = [...categoryData, category]
    console.log({newCateData})
    res.status(200).send(newCateData)

}

const updateById = (req, res) => {
    const cate = req.body
    const index = categoryData.findIndex((item) => item.id == cate.id)
    if (index != -1) {
        categoryData[index] = cate
        res.send(categoryData)
    } else {
        console.log("Product not found!")
        res.send("Product not found!")
    }
}




module.exports = {
    getAllCate,
    addCategory,
    updateById
}