const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()

const port = 3000
const { rootRouter } = require('./router/root_router')

app.use('/api/v1', rootRouter)

app.listen(port, () => {
    console.log(`Server listen port: ${port}`)
})

