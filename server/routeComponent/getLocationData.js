const express = require ('express');
const router = express.Router();
const data = require('../data/locations.json')

router.get('/', (request, response)=>{
    
    response.send(data)
    
})

module.exports = router;