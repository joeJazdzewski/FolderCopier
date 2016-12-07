var fs = require('fs');

class fileWatch {
    constructor(){
        
    }
    watch(folderName, listener) {  
        fs.readdir(folderName, (err, files) =>{
            files.forEach(file => {
                fs.watch(file, listener);
            });
        })
    }
}
fw = new fileWatch(); 
module.exports = fw;