/**
 * Created by prateek on 4/2/16.
 */
var fs=require("fs");
var file=process.argv[2];
cnt=0;
var buf=fs.readFileSync(file);
//console.log(buf.toString());
console.log(buf.toString().split("\n").length-1);

