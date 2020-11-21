var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const Post = require('../models/Post');

// Express body parser - MIDDLEWARE
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}));

/* Home page / index */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* Home page / index */
router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/covid', async(req, res) => {
  const posts = await Post.find().sort({ "_id" : -1});
  res.render('covid', { title: 'COVID-19 API Analytics' , posts: posts });
  res.send(posts)
});

/* Dashboard */
router.get('/dashboard', async(req, res) => {
  const posts = await Post.find().sort({ "_id" : -1});
  res.render('dashboard', { title: 'Welcome Dr. Alex'  , posts: posts});
  res.send(posts)  
});


module.exports = router;
