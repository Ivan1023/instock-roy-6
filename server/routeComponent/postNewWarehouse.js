const express = require ('express');
const router = express.Router();
const nanoid = require ('nanoid')
const locationData = require('../data/locations.json')

router.post('/', (request, response)=>{
    
    const data = request.body;
    const id = nanoid(4);

    const locationUpload = {
        "id": id,
        "name": data.name,
        "address": {
            "street": data.address,
            "city": data.location,
            "province": "Ontario",
            "postal": "M6N4B7"
        },
        "contact": {
            "name": data.contactName,
            "title": data.position,
            "phone": data.phoneNumber,
            "email": data.email
        },
        "inventoryCategories": data.categories
    }

    console.log('------Check to see if data is sent to data page------')
    console.log(locationUpload)

    locationData.push(locationUpload);
    response.send()
    
})

module.exports = router;