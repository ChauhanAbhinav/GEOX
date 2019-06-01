module.exports = function (app,db,path){

app.get('/', function(req, res) {
	res.sendFile(path.resolve('public/views/index.html'));
    });

app.get('/authStudent',function(req, res){
	if (req.session.student) {
		res.send(req.session.student);
	}
	else
		res.send("NULL");
});
app.get('/logoutStudent',function(req, res){
	req.session.destroy();
	res.send("logout success");
});
app.get('/attendance',function(request, response){
	var user = request.session.student;
	 var date=new Date();
	var dd = date.getDate();
	var mm = date.getMonth()+1; //January is 0!
	var yyyy = date.getFullYear(); 
	var date = {dd: dd, mm: mm, yyyy: yyyy};//console.log(date);
	var atten=db.db('geox').collection('center1_attendance');
   	atten.insert({username: user.username, attendance: true, date: date},function (err,res){	
   		if(err) throw err;
   		if(res)
   		{	var log = "attendance success";
   			response.send(log);
   		}
	});
});

app.get('/studentData',function(request, response){
		var user = request.session.student;
		var collStud=db.db('geox').collection('center1_students');
		collStud.findOne({username : user.username},function (err,res){ 
		if(err) throw err;
		response.send(res);
		});
});
app.get('/showAttendance',function(request, response){
		var user = request.session.student;
		var collAtten=db.db('geox').collection('center1_attendance');
		collAtten.find({username : user.username}).sort({date: -1}).toArray(function (err,res){
		if(err) throw err;
		//console.log(res); 
		response.send(res);
		});
});
app.post('/updateData',function(request, response){
		var user = request.body;
		var collStud=db.db('geox').collection('center1_students');
		collStud.insert(user,function (err,res){ 
		if(err) throw err;
		response.send(res);
		});
});
//module end
}

