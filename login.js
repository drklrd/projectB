var login = {

	login : function loginFunction (req,res){
		res.render('login',{title:'Login Page'});
	}

};


module.exports = login;