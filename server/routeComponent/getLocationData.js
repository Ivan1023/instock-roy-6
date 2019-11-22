const express = require ('express');
const router = express.Router();
const data = require('../data/locations.json')

router.get('/', (request, response)=>{
    
    response.send(data)
    
})

router.get('/:id', (request, response) => {
    const warehouseLocation = data.find(item => item.id == request.params.id ); 

    // verfiy if the warehouse location is valid
    warehouseLocation ? 
    response.send(warehouseLocation) : 
    //return status 404 if theres no data.
    response.status(404).send('Item not found')
  })

module.exports = router;