const express = require('express');
const blogController = require('../Controllers/blogController');
const router = express.Router();

router.get('/' , blogController.blog_index);

router.get( '/all-blogs' , blogController.get_all_blogs);

router.get( '/:id' , blogController.get_blog_byID );

router.get('/create' , blogController.get_create_page);

router.post('/create' , blogController.post_create_blog);


module.exports = router;