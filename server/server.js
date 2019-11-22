const express = require('express');
const app = express()
const cors = require('cors')
const getLocationData = require('./routeComponent/getLocationData')
const getInventoryData = require('./routeComponent/getInventoryData')


app.use(cors());
app.use(express.json())
app.use('/location', getLocationData)
app.use('/inventory', getInventoryData)



app.listen(8080,()=>{
    console.log("server is running on 8080, you're welcome")
})
