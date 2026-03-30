const http = require('http');

const port = process.env.PORT || 3000;
const customVar = process.env.MY_CUSTOM_VAR || 'not set';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello from Azure App Service! MY_CUSTOM_VAR = ${customVar}`);
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});
