const express = require('express')
const mysql = require('mysql2')
require('dotenv').config()
const cors =require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: process.env.DB_PASSWORD,
    database:"habit"
})

con.connect((err) => {
    if (err) throw err
    console.log("connected")
})
