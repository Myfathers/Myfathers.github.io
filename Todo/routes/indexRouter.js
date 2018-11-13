var express = require('express');
var router = express.Router();
var Todo = require('../lib/mongoose').Todo;


router.get('/', (err, restult) => {

    console.log('ssss');
    Todo.find((err, res) => {
        restult.render('index', {
            items: res
        });
    })
})
router.post('/', (req, res) => {
    Todo.create({
        content: req.body.usename
    })
    console.log(req.body.usename)
    res.redirect('/');

});

module.exports = router;