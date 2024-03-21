const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname === '/home/imePrezimePol'){
        const nameParts = parsedUrl.query.name.split('');
        const capitalizedParts = nameParts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
        const capitalizedFullName = capitalizedParts.join(' ');
        res.end(capitalizedFullName);
    } else if (parsedUrl.pathname === '/home/title'){
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Title</h1>');
    } else if (parsedUrl.pathname === '/home/header'){
        res.setHeader('Header', 'Ova e Heder-ot!');
        res.end();
    } else if (parsedUrl.pathname === '/calculator'){
        const {num1, num2, operator} = parsedUrl.query;
        let result;

        if(operator === 'add'){
            result = parseFloat(num1) + parseFloat(num2);
        } else if (operator === 'subtract'){
            result = parseFloat(num1) - parseFloat(num2);
        } else if (operator === 'multiply'){
            result = parseFloat(num1) * parseFloat(num2);
        } else if (operator === 'divide'){
            result = parseFloat(num1) / parseFloat(num2);
        } else if (operator === 'modulus'){
            result = parseFloat(num1) % parseFloat(num2);
        } else if (operator === 'square'){
            result = Math.pow (parseFloat(num1), 2);
        } else if (operator === 'cube'){
            result = Math.pow (parseFloat(num1), 3);
        } else {
            result = 'Invalid operation';
        }

        res.end(result.toString());
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
