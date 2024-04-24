const express = require('express');
const router = express.Router();
userController = require('../controller/user-controller')

router.use(express.static('public'));

router.get('/',userController.getmainpage);
router.post('/addblog',userController.postaddblog);
router.get('/fetch-blogs',userController.fetchblogs);
router.post('/post-blogs-comment/:blogid', userController.postblogscomment);
router.get('/fetch-blogs-comment/:blogid',userController.fetchblogscomments);


module.exports = router;