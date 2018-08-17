module.exports = function (app,path){

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
// app.get('*',function(req,res){
// 	res.sendFile(path.join(__dirname,'./../../public/views/404.html'));
// });

}


