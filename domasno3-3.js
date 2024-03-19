const fs = require('fs');

const file = 'text2.txt';

function readFile() {
    fs.readFile(file, 'utf8' ,(err, data) => {
        if(err){
            console.log('Error reading file:', err);
        } else {
            console.log('File content:', data);
        }
    })
}

fs.watchFile(file, (curr,pred) => {
    readFile();
});

readFile();
