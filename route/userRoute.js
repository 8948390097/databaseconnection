const express = require('express')
const router = express.Router()
const userController = require('../controller/userController.js')

router.post('/' , userController.saveData)
router.get('/getData',userController.getData)


module.exports = router