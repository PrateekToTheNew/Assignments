/**
 * Created by prateek on 4/2/16.
 */
var fs=require("fs");
fs.readFile(process.argv[2],"UTF-8",function(err,str){
   if(!err)
   {
       console.log(str.split("\n").length-1);
   }
});