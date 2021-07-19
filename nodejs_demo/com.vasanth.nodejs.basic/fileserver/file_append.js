var fs=require('fs');
var http=require('http');

fs.appendFile("./demofile-1",'Hello world!',function (err){
    if(err) throw err;
    console.log('File appended');
});

http.createServer(function (req,res){

 fs.readFile('./demofile-1',function (err,data){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(data);
    res.end();
 });

}).listen(8080);