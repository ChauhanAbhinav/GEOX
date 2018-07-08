module.exports = function (user,db) {
var coll=db.db('geox').collection('student');
coll.findOne({user})	
}; 