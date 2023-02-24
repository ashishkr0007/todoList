  //using node modules these func can be used  anywhere now


module.exports=getDate; //module.exports.getDate = function(){}  * it can be too

function getDate(){

    var today = new Date();

    var options ={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US", options);//give weekday, day, month, date in string
    return day;
}