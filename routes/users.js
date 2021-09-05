const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = express.Router();

//Login page
router.get('/login', (req, res) => res.render('login'));

//register page
router.get('/register', (req, res) => res.render('register'));

//register handle
router.post('register', (req, res) => {
    console.log(req.body)
    res.send('hello')

})

module.exports = router;