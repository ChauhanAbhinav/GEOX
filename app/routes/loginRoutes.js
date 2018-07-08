module.exports = function(app,db){
//STUDENT LOGIN REQUEST
	app.post('/student-login', function (request, response) {
    console.log("student login request accepted");
    
    var user = request.body;
    institute=db.db('geox').collection('admin');
   	institute.findOne({cid: user.cid},function (err,res){
		if(err) throw err;
		if(res)
			{
				var collStud=db.db('geox').collection(user.cid + '_students');
				collStud.findOne({username : user.username, password : user.password},function (err,res){
					if(err) throw err;
					if(res)
					{
						var log="Student Login Successful";
						console.log(log);	
						response.send(log)
					}
					else
					{
						var log="Username or Password Incorrect";
						
						console.log(log);
						response.send(log);
					}

				}); 
			}
		else{
			var log="Wrong Center Id";
			console.log(log);
			response.send(log);
			}
		});

	});
//ADMIN LOGIN REQUEST	
	app.post('/admin-login', function (request, response) {
    console.log("student login request accepted");
    
    var admin = request.body;
    institute=db.db('geox').collection('admin');
   	institute.findOne({cid: admin.cid, password: admin.password},function (err,res){
		if(err) throw err;
		if(res)
					{
						var log="Admin Login Successful";
						console.log(log);	
						response.send(log)
					}
					else
					{
						var log="CenterId or Password incorrect";
						
						console.log(log);
						response.send(log);
					}

	});
});
}