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

module.exports = router;