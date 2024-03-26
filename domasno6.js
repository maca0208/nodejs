const express = require('express');


const app = express();

const data = {
    cars: ['Mercedes', 'BMW', 'Audi', 'Mustang', 'Ford'],
    books: ['Choice of Gold', 'Union of Dreams', 'Chase Without Fear', 'Turtles of The River', 'Children of Desire'],
    cities: ['Bitola', 'Skopje', 'Ohrid', 'Krusevo', 'Stip']
};

app.get('/',(req,res) => {
    res.json(data);
});

app.get('/cars', (req,res) => {
    const {query} = req.query;
    const car = query ? `Car ${query}`: 'No car specified';
    res.end(car);
});

get.app('/books', (req,res) => {
    const {query} = req.query;
    const book = query ? `Book ${query}` : 'No book specified';
    res.end(book);
});

app.get('/users', async (req,res) => {
    try{
        const response = await fetch.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data.map(user => user.name);
        res.send(users.join(' , '));
    } catch (error) {
        res.status(500).send('Error fetching users data');
    }
});

app.get('/home', async(req,res) => {
    try{
        const response = await fetch.get('https://jsonplaceholder.typicode.com/users');
        const users =  response.data.map(user => `<li> ${user.name}</li>`).join('');
        res.send(`
        <html>
        <head>
            <title>Users</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                h1 {
                    color: blue;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li{
                    margin-bottom: 10px;
                }
                </style>
            </head>
            <body>
             <h1>Users</h1>
             <ul>
             ${users}
             </ul>
             </body>
             </html>
        `);
    } catch (error) {
        res.status(500).send('Error fetching users data');
    }
});

const PORT =3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

