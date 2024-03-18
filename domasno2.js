const fs = require("fs");

function write(file, data){
    fs.writeFile(file, data, (err) => {
        if(err){
            console.log("Error!");
        } else {
            console.log("Success");
        }
    })
}

write("diary.txt", "One two Three");