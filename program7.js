var http=require("http");
var fs=require("fs");
var bl=require("bl");

http.get(process.argv[2], function(response){
   response.pipe(bl(function(err,data){
       if(err)
        console.log(err);
       else{
        console.log(data.length);
        console.log(data.toString());
       }
   })); 
});