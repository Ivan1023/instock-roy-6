const express = require('express');
const app = express()
const routes = require('./routes/routes.js')
const cors = require('cors')

app.use('/', routes)
app.use(cors());
app.use(express.json())

app.listen(8080,()=>{
    console.log("server is running on 8080, you're welcome")
})
