const getAllMenu = (req, res) => {
    console.log('Get all menu from controller')
    res.send('Get all menu from controller')
}

const getDetailMenu = (req, res) => {
    res.send('Get detail from controller!')
}

module.exports = {
    getAllMenu,
    getDetailMenu
}