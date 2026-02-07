require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/lola', (req,res)=>{
    res.send("Lola Lega kya")
})


app.get('/Information', (req,res) =>{
    res.send("<h2> My name is Divyanshu Bindal and i am a BCA Student that gives the clear instituion of the  backend things and it will be more faster to learn the neew thing btw it is not that greates things that is need<h2/>")

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})