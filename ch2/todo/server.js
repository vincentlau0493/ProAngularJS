var connect = require("connect");
var serveStatic = require('serve-static');


var app = connect();
app.use(serveStatic("./public"));
app.use(function(req, res){
	res.end("NOT FOUND");
});
app.listen(5000,function(){
	console.log("listening 5000...")
});