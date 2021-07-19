var http=require('http');
var fs=require('fs');
var formidable = require('formidable');

//Form
http.createServer(function (req,res){

    if(req.url=='/fileUpload'){
        var form=formidable.IncomingForm();
        form.parse(req,function (err,fields,files){
            if(err) throw err;

            var filePath=files.filetoupload.path; //Temp location
            console.log("filePath: "+filePath)
            var newPath='C:\\Users\\vthangar\\Downloads\\'+files.filetoupload.name; // new location
            console.log("newPath: "+newPath)
            fs.rename(filePath,newPath,function (err){
                if(err) throw err;
                res.write("File Uploaded and moved to "+newPath);
                res.end();
            });
        });
    }else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<form action='fileUpload' method='post' enctype='multipart/form-data'>");
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
    }

}).listen(8080);

