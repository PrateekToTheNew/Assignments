/**
 * Created by prateek on 5/2/16.
 */
var http=require("http");
http.get(process.argv[2],function(res){
    var data1="";
    res.on("data",function(chunk){
       data1+=chunk;
    });
    res.on("end",function(){
       console.log(data1);
        http.get(process.argv[3],function(resp){
            var data2="";
            resp.on("data",function(c){
                data2+=c;
            });
            resp.on("end",function(){
                console.log(data2);
                http.get(process.argv[4],function(response){
                    var data3="";
                    response.on("data",function(ch){
                        data3+=ch;
                    });
                    response.on("end",function(){
                        console.log(data3);

                    });
                });
            });
        });
    });
});