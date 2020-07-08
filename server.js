let http = require('http');
let users = [
    { id: 11, name: 'zhufeng1' },
     { id: 21, name: 'kevin' }, 
     { id: 31, name: 'lily' }];
let server = http.createServer(function (req, res) {
    console.log(req.method, req.url);
    if (req.url == '/api/users') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(JSON.stringify(users));
    } else {
        res.end('Now Found!');
    }
});
server.listen(3005, () => {
    console.log('服务正在3005端口上启动!');
});