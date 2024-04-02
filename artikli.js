const fs = require("fs");
const DataSource = `${__dirname}/../artikl.json`;

const read = async () =>{
    return new Promise((resolve, reject) =>{
        fs.readFile(DataSource,"utf-8", (err, data)=>{
            if(err)
                return reject(err);
            else
                return resolve(data);
        })
    })
}

const write = async (data) =>{
    return new Promise((resolve, reject) =>{
        fs.writeFile(DataSource,data,(err)=>{
            if(err){
                return reject(err);
            }
            else {
                return resolve();
            }
        })
    })
}

const list = async () =>{
    let data = await read();
    let filedata = JSON.parse(data);
    return filedata;
}

const add = async (data) =>{
    let file = await read();
    let filedata = JSON.parse(file);
    filedata.push(data);
    await write(JSON.stringify(filedata));
}

const remove = async (index) =>{
    index = Number(index);
    let file = await read();
    let filedata = JSON.parse(file);
    filedata = filedata.filter((_,i) => i !== index);
    await write(JSON.stringify(filedata));
}

const editData = async (index , newdata) =>{
    let file = await read();
    let filedata = JSON.parse(file);
    filedata = filedata.map((artikl , i)=>{
        if(i === Number(index)){
            return{
                ...artikl,
                ...newdata
            };
        }
        return artikl;
    });
    await write(JSON.stringify(filedata));
}

module.exports = {
    list,
    remove,
    add,
    editData,
    read
}