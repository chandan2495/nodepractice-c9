var express=require("express");
var app=express();

app.get("/search", function(req,resp){
    var res=req.query;
    delete res['__proto__'];
    resp.send(JSON.stringify(res)); 
});

app.listen(process.argv[2]);