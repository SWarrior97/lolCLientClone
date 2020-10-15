const express = require('express')
const router = express.Router()
var path = require("path");


// @desc   
// @route   GET /
router.get('/',async (req,res) =>{
	try{
		res.send("teste")
	}catch(err){
		console.log(err)
		res.render('error/500')
	}
})

router.get('/login',async (req,res) =>{
	try{

		res.render('dashboard',{
            layout:'main.hbs'
        })

	}catch(err){
		console.log(err)
		res.render('error/500')
	}
})


module.exports = router
