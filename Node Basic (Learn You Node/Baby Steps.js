/**
 * Created by prateek on 4/2/16.
 */
//console.log(process.argv);
var sum=0;
process.argv.slice(2).forEach(function(e){
    sum+=parseInt(e);
});
console.log(sum);