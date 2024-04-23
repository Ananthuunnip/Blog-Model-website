const express = require('express');
const router = express.Router();
userController = require('../controller/user-controller')

router.use(express.static('public'));

router.get('/',userController.getmainpage);
router.post('/addblog',userController.postaddblog);
router.get('/fetch-blogs',userController.fetchblogs);
module.exports = router;