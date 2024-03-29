const express = require('express');
const router = express.Router();
const data = require('../data/locations.json')

router.get('/', (request, response) => {

  response.send(data)

})

router.get('/:id', (request, response) => {
  const warehouseLocation = data.find(item => item.id == request.params.id);

  // verfiy if the warehouse location is valid
  warehouseLocation ?
    response.send(warehouseLocation) :
    //return status 404 if theres no data.
    response.status(404).send('Item not found')
})

router.delete('/:id', (request, response) => {
  const inventoryIndex = data.findIndex((item) => {
    return item.id == request.params.id
  })
  if (inventoryIndex >= 0) {
    data.splice(inventoryIndex, 1)
    response.send('Item has been deleted')
  }
  else {
    response.status(400).send('Item not found')
  }
})

module.exports = router;