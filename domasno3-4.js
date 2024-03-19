const fs = require('fs');

const file = 'text2.txt';

async function readFile(){
    try {
        const data = await fs.promises.readFile(file, 'utf8');
        console.log('File content:', data);
    } catch (error){
        console.log('Error reading file:', error);
    }
}

async function watchFile(){
    fs.watch(file, async(event, filename) => {
        console.log(`${file} changed`);
        await readFile();
    })
}

async function bonus(){
    try {
        await readFile();
        await watchFile();
    } catch (error) {
        console.log('Error:', error);
    }
}

bonus();
