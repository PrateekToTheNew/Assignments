/**
 * Created by prateek on 5/2/16.
 */
var fs=require("fs");
var readerStream=fs.createReadStream(process.argv[3]);
var http=require("http");
var data="";
var server=http.createServer(function(req,res){
   readerStream.on("data",function(chunk){
       data+=chunk;
   });
    readerStream.on("end",function(){
        res.write(data);
    });
});
server.listen(process.argv[2]);
console.log("Server running on port "+process.argv[2]);
