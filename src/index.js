require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    return res.json('Api está OK')
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`);
})