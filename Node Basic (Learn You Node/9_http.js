var async=require("async");
var http=require("http");
var urls=process.argv.slice(2);
//console.log(urls);
var cb=function(){
    console.log("this is cb");
};
var mytask=function(url,cb){
    console.log(url);
    cb();
    //var data="";
    //http.get(url,function(res){
    //    res.on("data",function(chunk){
    //        data+=chunk;
    //    });
    //    res.on("end",function(){
    //        console.log(data);
    //    });
    //});
};
async.series([mytask("1",cb),mytask("2",cb),mytask("3",cb)],function(err){
    console.log("error");
});

