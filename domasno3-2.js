const fs = require("fs");

const file = "text2.txt";

const appendData = "Test one Two 3";

fs.appendFile(file, appendData,(err) => {
    if(err){
        console.log("Error appending data: ", err);
    } else {
        console.log("Data appended");
        fs.readFile(file, "utf8", (err, data) => {
            if(err){
                console.log("Error reading file:", err);
            } else {
                console.log("File content:", data);
            }
        })
    }
})
