// import express from "express"

const express = require("express")

// mongo connection

require("./config/db").connectToDB()

// const {connectToDB} = require("./config/db")
// connectToDB()

// initialize app

const app = express()

// import some middleware

const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")

// use middleware

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(morgan('tiny'))

module.exports = app;

app.get('/', (req, res) => {
    res.send("Hello ji, Kya haal chal")
})

module.exports = app