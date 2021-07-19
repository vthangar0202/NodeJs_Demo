var fs=require('fs');

fs.unlink('demofile-3',function (err){
    if(err) throw err;
    console.log('File Deleted ...')
});