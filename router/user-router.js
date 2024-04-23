const express = require('express');
const router = express.Router();
userController = require('../controller/user-controller')

router.use(express.static('public'));

router.get('/',userController.getmainpage);
router.post('/addblog',userController.postaddblog);
router.get('/fetch-blogs',userController.fetchblogs);
router.get('/fetch-one-blogs/:valueid',userController.fetchoneblogs);
module.exports = router;