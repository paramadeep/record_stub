var httpProxy = require('http-proxy'),
    http = require('http'),
    yaml = require('yamljs');

var proxy = httpProxy.createServer();
var server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://127.0.0.1:9000' });
});
server.listen(8000);

proxy.on('proxyRes', function (res) {
  console.log(JSON.stringify(res.headers, true, 1));
});
