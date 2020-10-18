const express = require('express')
const router = express.Router()
var path = require("path");
const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {registerValidation,loginValidation} = require('../helpers/validator');


// @desc   
// @route   GET /
router.get('/',async (req,res) =>{
	try{
		res.render('login', {
			layout: 'login',
		})
	}catch(err){
		console.log(err)
		res.render('error/500')
	}
})

router.post('/login',async (req,res) =>{
	try{
		let user = await User.findOne({username:req.body.username}).exec();
		
		const {error} = loginValidation(req.body);

		if(error){
			res.render('error/custom',{
				title:"Validation",
				content:error.details[0].message
			})
			
		}else{
			if(user == null){
				res.render('error/custom',{
					title:"Wrong Credential",
					content:"Your login credentials don't match an account in our system"
				})
			}else{
				if (bcrypt.compareSync(req.body.password, user.password)) {
					console.log("true")
				} else {
					res.render('error/custom',{
						title:"Wrong Credential",
						content:"Your login credentials don't match an account in our system"
					})
				}
			}
		}

	}catch(err){
		console.log(err)
		res.render('error/500')
	}
})

router.get('/register',async (req,res) =>{
	try{
		res.render('register', {
			layout: 'login',
		})
	}catch(err){
		console.log(err)
		res.render('error/500')
	}
})

router.post('/register',async (req,res) =>{
	try{
		if(req.body.password == "" || req.body.username == ""){
			res.render('error/500')
		}else{
			const {error} = registerValidation(req.body);
			console.log(error)

			if(error){
				res.render('error/custom',{
					title:"Validation",
					content:error.details[0].message
				})
				
			}else{
				let user = await User.findOne({username:req.body.username}).exec();
				console.log(user);

				if(user){
					res.render('error/custom',{
						title:"Username",
						content:"Username already taken"
					})
				}else{
					let user = await User.findOne({email:req.body.email}).exec();

					if(user){
						res.render('error/custom',{
							title:"Email",
							content:"Email already taken"
						})
					}else{
						bcrypt.hash(req.body.password, saltRounds, async function (err,   hash) {
							req.body.password = hash;
							await User.create(req.body)
							res.redirect('/')
						});
					}
				}
				
			}
			
		}
	}catch(err){
		console.log(err)
		res.render('error/500')
	}
})

module.exports = router
