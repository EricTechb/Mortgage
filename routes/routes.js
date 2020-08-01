const express=require('express')
const router= express.Router()

router.get('/', function(req, res){
    res.render('index', {title: 'Homepage - Audio', styleFile:'main.css'})
});

router.get('/credits', function (req,res){
    res.render('credits', {title:'Credits', styleFile:'main.css'})
})

module.exports = router;