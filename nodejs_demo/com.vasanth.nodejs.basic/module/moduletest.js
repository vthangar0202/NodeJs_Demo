var http=require('http');
var vas_module=require('./vasmodule');

http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Current date is: "+vas_module.vas_current_date());
    res.end();
}).listen(8080);