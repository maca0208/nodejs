const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

async function write(file, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err, data) => {
            if(err){
                reject(err);
                return
            }
            resolve(data);
            console.log("Data written sucessfully!");
        })
    })
}

async function read(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file,'utf8', (err, data) => {
            if(err){
                reject(err);
                return;
            }
            resolve(data);
            console.log("Data read successfully!");
        });
    });
}

module.exports ={
    write,
    read,
}
