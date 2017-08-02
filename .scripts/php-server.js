const phpServer = require('node-php-server');

const config = {
    port: 8080,
    hostname: '127.0.0.1',
    base: '.',
    keepalive: false,
    open: false,
    bin: 'php',
    router: __dirname + '/../index.php'
};

phpServer.createServer(config);

console.log(' ');
console.log('######################################################################');
console.log(`# PHP Server started at http://${config.hostname}:${config.port}`);
console.log('######################################################################');
console.log(' ');
