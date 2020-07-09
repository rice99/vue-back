let http = require('http');
let users = [
    {id:1111,name:'tang'},
     { id: 2222, name: 'kevin' }, 
     { id: 3333, name: 'lily' },
    {id:44,name:'xie'},
    {id:55,name:'zhang'},
    {id:4444,name:'wang'},
    {id:6666,name:'xx'},
    {id:89898,name:'test'},
    {id:1000,name:'is ok?'},
    {id:111,name:'i allmost know'},
    {id:22,name:'haha'}
    ];
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