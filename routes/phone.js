const express = require('express');
const router = express.Router();

const phonesController = require("../controllers/phones")

/* GET users listing. */
router.get('/', phonesController.getAllPhones)

router.get('/:id', phonesController.getPhoneById)

router.post('/', phonesController.createPhone)

router.put('/:id', phonesController.updatePhone)

router.patch('/:id', phonesController.patchPhone)

router.delete('/:id', phonesController.deletePhone)

module.exports = router;
