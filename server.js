const express = require('express')
// const res = require('express/lib/response')
const app = express()
app.use(express.json())

/*
CHUẨN

METHOD:
    Get: => dùng để lấy data
    Post: => dùng để tạo dữ liệu (Thêm, cập nhật, xoá, lấy data)
        Post dùng theo chuẩn thì dùng để thêm data, nhưng có thể dùng để edit/delete/add
    Update: => chuyên dùng để cập nhật lại dữ liệu
    Delete: => Chuyên dùng để xoá data.


POST MAN
GET: => Tham số phải điền ở tab params

POST, PUT, DELETE => tham số nằm ở tab body
    - POST STYLE:
        + form-data: truyền tham số có đính kèm file(multipart form data)
        + url-encoded: truyền ngầm dạng key-value đơn giản, ko truyền file
        + raw: truyền tham số với nhiều dạng khác nhau (text, json, xml), truyền dữ liệu lớn, ko giới hạn về kích thước.
            +lấy tham số của raw: req.body

*/

// app.get('/menu/:tenmenu/:loai',(req, res) => {
//     //nơi xữ lí code
//     //urlencoded (query params): res.query

//     //path param(/:tenthamso/:tenthamso): req.params
//     console.log(req.params)
//     res.send ("hello menu")
// })

// app.post('/menu/add/:loai', (req, res) => {
//     console.log(req.params)
//     // console.log(req.body)
//     res.send('Add Menu')
// })

// const port = 3000
// app.listen(port, () => {
//     console.log('Server listen port ${port}')
// }) 

/*
    Viết URL: Hiển thị toàn bộ danh sách category 
        B1: Định nghĩa được đường dẫn phương thức GET
        B2: Lấy được data
        B3: Trả ra dữ liệu category data

    Viết URL: Thêm một category mới (POST)
*/
// const {categoryData} = require('./constant')
// const fs = require('fs')
// app.get('/category', (req, res) => {
//     res.send(categoryData)
// })

// app.post('/category/add', (req, res) => {
//     const cate = req.body
//     const newData = [...categoryData, cate]
//     console.log(req.body)    
//     res.send("Category add")
//     console.log(newData)
// })