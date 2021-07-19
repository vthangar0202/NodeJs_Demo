var fileserver=require('fs');
var http=require('http');

http.createServer(function (req,res){
    fileserver.readFile('./demofile-1',function (err,data){
        if(err) throw err;
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);