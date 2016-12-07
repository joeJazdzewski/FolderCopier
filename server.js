var path = require("path");
var fs = require("fs");
var fw = require('./libs/folderWatch');
var format = require('./libs/strFormat'); 

var onWatch = (event, p) => {
    console.log(event, p);
    if(p.indexOf(".") == -1)
        return;
    
    var d = new Date();
    var copyPath = 'copies/' + 
        format(
            "{0}-{1}-{2}", 
            d.getMonth() + 1,
            d.getDate(), 
            d.getFullYear()
        ) + '/';

    if(!fs.existsSync(copyPath))  
        fs.mkdirSync(copyPath); 

    fs.createReadStream(p).pipe(
        fs.createWriteStream(copyPath + p)
    );
};

fw.watch("./libs", onWatch);