const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.locals.title = 'Chris Rojas - Portfolio'

  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about')
})

router.get('/contact', (req, res) => {
  res.render('contact')
})

router.get('/projects', (req, res) => {
  res.render('projects')
})

router.get('/service', (req, res) => {
  res.render('service')
})


module.exports = router;
