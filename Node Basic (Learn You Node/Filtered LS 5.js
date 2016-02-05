/**
 * Created by prateek on 4/2/16.
 */
var fs=require("fs");
var directory=process.argv[2];
var ext=process.argv[3];
var filtered_list=[];
fs.readdir(directory,function(err,list){
    if(!err) {
        list.forEach(function (element) {
            var indexOfDot = element.lastIndexOf('.'),extention;
            if (indexOfDot !== -1){
                extention = element.substring(indexOfDot,element.length);
            }
            //str = e.substring(e.lastIndexOf(".") + 1, e.length);

            if (extention && extention == "."+ext)
                filtered_list.push(el);
        });
        cb(null,filtered_list);
    }
});
