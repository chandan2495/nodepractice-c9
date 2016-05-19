var fs=require("fs");

var buffer;

fs.readFile(process.argv[2],function(err,buffer){
   var output=buffer.toString();

   console.log(output.split("\n").length-1); 
});