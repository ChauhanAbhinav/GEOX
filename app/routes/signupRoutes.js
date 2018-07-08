module.exports = function (app,db,path) {
	app.post("/register",function(request, response){
	console.log("register request accepted");
    
    var user = request.body;
    institute=db.db('geox').collection('admin');
   	institute.findOne({cid: user.cid},function (err,res){
	if(err) throw err;

	if (res) {
				
			collEnroll=db.db('geox').collection(user.cid + '_enroll');
			collEnroll.findOne({enroll : user.enroll},function (err,res){
				if(res)
				{	student=db.db('geox').collection(user.cid + '_students');
					student.insert(user,function(err,res){
					if (err) { throw err;}
					
					log= "Sign up completed";
					response.redirect("/views/dashboard.html");
					console.log(log);
					});
				
				}
			else
				{	log = "Wrong enrollment number";
					console.log(log);
					response.send(log);
				}
			});
	
		}
	else
		{
			log = "Wrong center Id";
				console.log(log);
				response.send(log);
		}
	
	});
  
	});
}