var net=require('net');

var server=net.createServer(function(socket){
   var date=new Date();
   var dateString=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();
   socket.write(dateString) ;
   socket.end();
});

server.listen(process.argv[2]);