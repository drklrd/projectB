var login = {

	login : function loginFunction (req,res){
		res.render('login',{title:'Login Page'});
	},

	register : function registerFunction(req,res) {
		console.log('Form data : ' + JSON.stringify(req.body));

	}

};


module.exports = login;