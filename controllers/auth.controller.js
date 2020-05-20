var db=require('../db.js');
var md5=require('md5');

module.exports.login=(req, res) => res.render('auth/login');

module.exports.postLogin=(req, res) => {
	var email=req.body.email;
	var password=req.body.password;

	var user=db.get('users').find({email:email}).value();
	if(!user)
	{
		res.render('auth/login',{
			errors:['user do not exist'],
			values:req.body
		});
		return;
	}
	var hashedPassword=md5(password);
	if(hashedPassword!==user.password)
	{
		res.render('auth/login',{
			errors:['wrong password'],
			values:req.body
		});
		return;
	}
	res.cookie('userId',user.id,{
		signed:true
	});
	res.redirect('/users');
};