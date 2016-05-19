var fs=require("fs");
var bl=require("bl");
var http=require("http");

var callBackCounter=0;
var output=[];


    http.get(process.argv[2],function(response){
       response.pipe(bl(function(err,data){
           if(err)
            console.log(err);
           output[0]=data;
           callBackCounter++;
            if(callBackCounter==3)
{
    for(var j=0;j<3;j++)
        console.log(output[j].toString());
}
          
       })); 
    });
       http.get(process.argv[3],function(response){
       response.pipe(bl(function(err,data){
           if(err)
            console.log(err);
           output[1]=data;
           callBackCounter++;
            if(callBackCounter==3)
{
    for(var j=0;j<3;j++)
        console.log(output[j].toString());
}
          
       })); 
    });
       http.get(process.argv[4],function(response){
       response.pipe(bl(function(err,data){
           if(err)
            console.log(err);
           output[2]=data;
           callBackCounter++;
            if(callBackCounter==3)
{
    for(var j=0;j<3;j++)
        console.log(output[j].toString());
}
          
       })); 
    });

