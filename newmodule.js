
module.exports = function(dirname, ext, callbackfunction){
    var fs=require("fs");
    var path=require("path");
    fs.readdir(dirname,function(err,list){
        if (err)
            return callbackfunction(err) // early return
        var ext1='.'+ext;
        var output=[];
       for(var i=0;i<list.length;i++)
       {
            if(path.extname(list[i])==ext1)
                output.push(list[i]);
       }
        callbackfunction(null,output);
  });
 }

