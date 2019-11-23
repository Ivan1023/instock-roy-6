const express = require('express');
const app = express()
const cors = require('cors')
const getLocationData = require('./routeComponent/getLocationData')
const getInventoryData = require('./routeComponent/getInventoryData')
const postlocation = require('./routeComponent/postNewWarehouse')


app.use(cors());
app.use(express.json())
app.use('/locationdata', getLocationData)
app.use('/inventorydata', getInventoryData)
app.use('/postlocation', postlocation)



app.listen(8080,()=>{
    console.log("server is running on 8080, you're welcome")
})
