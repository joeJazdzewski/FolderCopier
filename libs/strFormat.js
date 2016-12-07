function strFormat(){
    var str = arguments[0];
    for(var i = 0; i < arguments.length - 1; i++){
        var index = "{" + i + "}";
        while(str.indexOf(index) > -1){
            str = str.replace(index, arguments[i + 1]);
        }
    }
    return str;
}

module.exports = strFormat;