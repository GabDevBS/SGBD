const sqlite = require('sqlite3');
const { open } = require('sqlite')

// criar uma conexão com o banco de dados
async function dbconection() {
    try{
        const db = await open({
        filename: './banco.db',
        driver: sqlite.Database
    })
    await db.exec(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
        )`)

    // await db.run(`INSERT INTO users (nome, email) 
    // VALUES (?, ?)`, ['Gabriel', 'gabriel_b_sousa2@estudante.sesisenai.org.br'])

    //     const usuarios = await db.all(`SELECT * FROM users`)
    //     console.log(usuarios)
        return db
    } catch (err) {
        console.log(err)
    }
}

module.exports = dbconection

// executar um script simples de criação de tabela
// executar um script simples adicionando um usuário
// executar um script simples de leitura na tabela
// encerrar a conexão 