/**
 * Created by prateek on 4/2/16.
 */
var fs=require("fs");
var arr=[];

exports.filter=function(directory,extension,cb){
    //console.log("first file");
    fs.readdir(directory,function(err,list) {
        if(err) {
            console.log("error");
            cb(err,null);
        }
        else {
            //console.log(list);
            list.forEach(function (element) {
                var indexOfDot = element.lastIndexOf('.'), ext;
                if (indexOfDot !== -1) {
                    ext = element.substring(indexOfDot, element.length);
                    //console.log(extention);
                }
                //str = e.substring(e.lastIndexOf(".") + 1, e.length);

                if (ext && ext == "." + extension)
                    arr.push(element);
            });
            cb(null,arr);
        }
    });
}