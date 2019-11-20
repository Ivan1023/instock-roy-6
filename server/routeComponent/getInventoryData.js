const express = require ('express');
const router = express.Router();
const invData = require('../data/inventory.json')

router.get('/', (request, response)=>{
    
    response.send(invData)
    
})

module.exports = router;