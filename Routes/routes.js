const express = require('express')
const dataController = require('../controller/dataController')


const router = express.Router();


router.post('/add',dataController.add);
router.get('/adds',dataController.getadd)
router.post('/update',dataController.update);
router.get('/count',dataController.count);


module.exports = router ;
 