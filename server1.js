var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.write("<body bgcolor='orange'>");
	res.write("<h1> Welcome to Node js </h1>");
	res.end();
	}).listen(2020);
	console.log("Server started at 2020");
