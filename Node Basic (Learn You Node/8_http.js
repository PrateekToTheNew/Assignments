/**
 * Created by prateek on 4/2/16.
 */
var http=require("http");
var data="";
http.get(process.argv[2],function(res){
   res.on("data",function(chunk){
       data+=chunk;
   })
    res.on("end",function(){
        console.log(data.length);
        console.log(data);
    });
});