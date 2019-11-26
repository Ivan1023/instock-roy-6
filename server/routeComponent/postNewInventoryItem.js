const express = require ('express');
const router = express.Router();
const nanoid = require ('nanoid')
const inventory = require('../data/inventory.json')

router.post('/', (request, response)=>{
    
    const data = request.body;
    const id = nanoid(4);

    const inventoryUpload = {
            "id": id,
            "name": data.name,
            "description": data.description,
            "quantity": data.quantity,
            "lastOrdered": data.lastOrdered,
            "location": data.location,
            "isInstock": null,
            "categories": data.categories,
            "warehouseId": data.warehouseId
    }

    console.log('??')

 inventory.push(inventoryUpload);
    response.send()
    
})

module.exports = router;