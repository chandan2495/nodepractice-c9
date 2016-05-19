var http=require("http");
var url=require("url");

var server=http.createServer(function(request,response){
    if(request.method!='GET')
        response.end('Send me a get request now !!!!!');
    var obj=url.parse(request.url,true);
    var count=0;
    var jsonResp;
    if(obj.pathname=="/api/unixtime")
    {
        var date=new Date(obj.query.iso);
        jsonResp={
          'unixtime' : date.getTime()  
        };
    }
    else{
        var date=new Date(obj.query.iso);
        var jsonResp={
          "hour" : date.getHours(),
          "minute": date.getMinutes(),
          "second" : date.getSeconds()
        }; 
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(jsonResp));
    response.end();
});

server.listen(process.argv[2]);