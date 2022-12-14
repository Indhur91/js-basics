// function that returns boolean flag 
var b = function (no){
    if(no < 5000){
        return "false";
}
else if(no <=9999){
    return "true";
}
}
console.log(b(5000));