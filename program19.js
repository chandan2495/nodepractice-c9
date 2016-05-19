var express=require("express");
var app= express();
var fs=require("fs");

app.get('/books',function(req,resp){
    fs.readFile(process.argv[3],function(err,data){
        if(err)
           return resp.end(err);
       resp.send(JSON.stringify(JSON.parse(data))); 
    });
})
app.listen(process.argv[2]);