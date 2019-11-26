const express = require('express');
const router = express.Router();
const nanoid = require('nanoid');
const invData = require('../data/inventory.json');

router.get('/', (request, response) => {

  response.send(invData)

})

router.post('/', (request, response) => {
  const data = request.body;
  const id = nanoid(4);

  const productUpload = {
    "id": id,
    "name": data.name,
    "description": data.description,
    "quantity": data.quantity,
    "lastOrdered": data.lastOrdered,
    "location": data.location,
    "isInstock": data.isInstock,
    "categories": data.categories,
    "warehouseId": `W${id}`
  }
    invData.push(productUpload);
  response.send()
});

router.get('/:id', (request, response) => {
  //get the inventory item from the data
  const inventoryItem = invData.find(item => item.id == request.params.id);

  // verfiy if the iventory item has data
  inventoryItem ?
    response.send(inventoryItem) :
    //return status 404 if theres no data.
    response.status(404).send('Item not found')
})

router.delete('/:id', (request, response) => {
  const inventoryIndex = invData.findIndex((item) => {
    return item.id == request.params.id
  })
  if (inventoryIndex >= 0) {
    invData.splice(inventoryIndex, 1)
    response.send('Item has been deleted')
  }
  else {
    response.status(400).send('Item not found')
  }
})

module.exports = router;