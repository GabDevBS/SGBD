import * as sqlite from 'sqlite3';
import {open} from "sqlite";

let db

async function conectar() {
    db = await open({
        filename: `./teste.db`, driver: sqlite.Database
    })
    setup()
}

async function setup( db ) {
    await db.exec(`CREATE TABLE IF NOT EXISTS users
             (
                 id    INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                 name  TEXT NOT NULL,
                 email TEXT NOT NULL
             )`)
    await db.exec(`CREATE TABLE IF NOT EXISTS users (
    
                   )`)
}


// Executar código sqlite