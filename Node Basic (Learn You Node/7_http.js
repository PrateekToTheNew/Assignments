/**
 * Created by prateek on 4/2/16.
 */
var http=require("http");
var fs = require('fs');

http.get(process.argv[2],function(res){
    //res.setEncoding("utf8");
    //var ws = fs.createWriteStream('./google.html');
    res.on("data",function(chunk){
       console.log(chunk.toString());
    });

    res.pipe(ws);
});