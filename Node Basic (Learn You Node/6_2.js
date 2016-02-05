/**
 * Created by prateek on 4/2/16.
 */
var file=require("./6_1.js");
file.filter(process.argv[2],process.argv[3],function(err,data){
   if(err){
       console.log("Error in reading file");
   }
    else{
       data.forEach(function(el){
          console.log(el);
       });
   }
});