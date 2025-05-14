const express = require('express')
const dbconection = require('./db')

const app = express()
app.use(express.json())
const db = dbconection()

app.post('/usuarios', async (req, res) => {
    const {nome, email} = req.body
    try{
        const result = await db.run('INSERT INTO usuarios (nome,email) VALUES (?,?)', [nome, email]
        )
        res.status(201).json({msg: "Criado com sucesso"})
    } catch (err) {
        res.status(500).json({msg:err})
    }
})

app.listen(8000, () => {console.log('Server Startado')})