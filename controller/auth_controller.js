const bcrypt = require('bcryptjs')
const { sequelize } = require('../config/db_connect')
const initmodels = require('../models/init-models')
var models = initmodels(sequelize)
const {generateToken, decodeToken} = require('../helper/jwt.helper')


const signIn = async (req, res) => {
    const {user_name, user_password} = req.body
    const user = await models.users.findOne({
        where: {
            user_name
        }
    })
    if(user != null) {
        const isSuccess = bcrypt.compareSync(user_password, user.user_password)
        if(isSuccess) {
            const accessToken = generateToken(user)
            // var decoded = jwt.verify(accessToken, process.env.SECRECT_KEY)

            // console.log(process.env.SECRECT_KEY)

            // console.log(decoded)
            console.log("-----------------------")
            console.log(accessToken)
            res.status(200).send({message: 'Success!', status_code: 200, success: true, accessToken})
        } else {
            res.status(200).send({message: 'Password wrong!', status_code: 200, success: false})
        }
    } else {
        res.status(200).send({message: 'Account not exist!', status_code: 200, success: false})
    }
}

const signUp = async (req, res) => {
    const {user_name, user_password, fullname, first_name, last_name, sdt} = req.body
    const salt = bcrypt.genSaltSync(10) //tạo độ dài mã hóa
    const hashPassword = bcrypt.hashSync(user_password, salt) //mã hóa password

    const user = await models.users.create(
        {
        user_name,
        user_password: hashPassword,
        fullname,
        first_name,
        last_name,
        sdt
        }
        
    )
    if(user != null) {
        res.status(201).send({message: 'Success!', status_code: 201, success: true})
    } else {
        res.status(200).send({message: 'Fail!', status_code: 500, success: false})
    }

}

const checkAuthen = (req, res, next) => {
    const token = req.headers.authorization
    console.log(token)
    const decode = decodeToken(token.slice(7))
    console.log("-------------------------------------------")
    console.log(decode)
    if (decode != null) {
        next()
        res.send(decode)
    } else {
        res.status(401).send({message: 'Fail decode!', status_code: 401, success: false})
    }
}

module.exports = {
    signIn,
    signUp, 
    checkAuthen
}