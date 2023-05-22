const { sequelize } = require('../config/db_connect')
const initmodels = require('../models/init-models')

var models = initmodels(sequelize)

const getAllUser = async (req, res) => {
    const data = await models.users.findAll()
    res.send(data)
}
// const getAllUser =  (req, res) => {
//     res.send("All user here!")
// }

const insertUser = async (req, res) => {
    try {
        const user = req.body
        const insertUser = await models.users.create({ 
            user_name: user.user_name, 
            user_password: user.user_password, 
            fullname: user.fullname, 
            firstname: user.firstname, 
            last_name: user.last_name, 
            sdt: user.sdt 
        })
        res.status(201).send(insertUser)
    } catch (err) {
        res.status(500).send(err) //lỗi 
    }
}

const findById = async (req, res) => {
    try {
        const idUser = req.params
        const user = await models.users.findOne({ where: { id: idUser.id } })
        if (null == user) {
            res.status(200).send('User not found!')
        } else {
            res.status(200).send(user)
        }
    } catch (err) {
        res.status(500).send(err)
    }

}

module.exports = {
    getAllUser,
    insertUser,
    findById
}

/*
    Tạo ra 1 link nhâp vào thông tin user thì insert user mới vào database
    Tạo 1 link nhận vào id lấy đúng user mà người dùng truyền vào 

*/