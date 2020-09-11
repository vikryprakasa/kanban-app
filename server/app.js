const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const routes = require('./routes')
const cors = require('cors')


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)

app.listen(port,()=>{
    console.log(`${port} fm`)
})