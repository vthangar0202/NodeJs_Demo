var url=require('url');
var http=require('http');
var fs=require('fs');

http.createServer(function (req,res) {
    var q=url.parse(req.url,true);
    var filename='.'+q.pathname;

    //read a file
    fs.readFile(filename,function (err,data) {
        //response
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    });


}).listen(8080);