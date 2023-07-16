const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.json({ msg: "testing backend api"})
})

app.listen("3000")