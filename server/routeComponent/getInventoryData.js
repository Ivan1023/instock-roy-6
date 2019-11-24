const express = require ('express');
const router = express.Router();
const invData = require('../data/inventory.json')

router.get('/', (request, response) => {
    
    response.send(invData)
    
})

router.post('/', (req, res) => {
    // console.log(req.body)

    if(req.body!== undefined) {
        invData.push(req.body)
    }
    else{console.log('400 status')}

    res.send(invData);
})

router.get('/:id', (request, response) => {
    //get the inventory item from the data
    const inventoryItem = invData.find(item => item.id == request.params.id ); 

    // verfiy if the iventory item has data
    inventoryItem ? 
    response.send(inventoryItem) : 
    //return status 404 if theres no data.
    response.status(404).send('Item not found')
  })

module.exports = router;