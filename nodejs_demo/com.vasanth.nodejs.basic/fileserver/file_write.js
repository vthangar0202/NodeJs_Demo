var fs=require('fs');

var content='<html><h1>demo for file server write</h1></html>';
fs.writeFile("demofile-3",content,function (err){
    if(err) throw err;
    console.log("file write completed");
});

