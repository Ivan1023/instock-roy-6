const express = require('express');
const router = express.Router();
const nanoid = require ('nanoid');
const invData = require('../data/inventory.json');

router.get('/', (request, response) => {

  response.send(invData)

})

router.post('/', (request, response)=>{
  console.log(request.body)
    
  const data = request.body;
  const id = nanoid(4);

  console.log(data);
  const productUpload = {
    "id": id,
    "name": data.name,
    "description": data.description,
    "quantity": data.quantity,
    "lastOrdered": data.lastOrdered,
    "location":  data.location,
    "isInstock": data.isInstock,
    "categories": data.categories,
    "warehouseId": `W${id}`
  }

  console.log('------Check to see if data is sent to data page------')

  invData.push(productUpload);
  response.send()
})

// router.post('/', (req, res) => {
//   const newInventoryItem = {
//     id: nanoid(4),
//     name: req.body.name,
//     short_description: req.body.short_description,
//     long_description:
//       "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//     last_ordered: req.body.last_ordered,
//     location: req.body.city + ', ' + req.body.country,
//     quantity: req.body.quantity,
//     reference_number: faker.finance.bic(),
//     in_stock: req.body.in_stock,
//     categories: ['Industrial', 'Automotive', 'Heavy', 'Mechanical', 'Engineering', 'Sales']
//   }

//   if (req.body.name !== undefined) {
//     inventory.push(newInventoryItem)

//     fs.writeFileSync('./Database/inventory.json', JSON.stringify(inventory))

//     res.status(200).send({
//       success: true,
//       message: req.body.name + ' item has been added.',
//       body: [inventory]
//     })
//   } else {
//     res.status(400).send({
//       success: false,
//       message: 'Post body required'
//     })
//   }
// })

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