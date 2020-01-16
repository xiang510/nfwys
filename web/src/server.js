const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// var bodyParser = require('body-parser');
// var logger = require('morgan');
var proxyMiddleWare = require('http-proxy-middleware');
// restream parsed body before proxying
var restream = function(proxyReq, req, res, options) {
  if (req.body) {
    let bodyData = JSON.stringify(req.body);
    // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
    proxyReq.setHeader('Content-Type', 'application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    // stream the content
    proxyReq.write(bodyData);
  }
};
var proxyPath = 'http://x.x.x.x:3000/'; //目标后端服务地址
var proxyOption = {
  target: proxyPath,
  changeOrigin: true,
  // ws: true,
  secure: false,
  onProxyReq: restream,
  // pathRewrite: { '^/api': '/api' }
};

const app = express();
const config = require('./configs/webpack.config.dev.js');
const compiler = webpack(config);

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/api', proxyMiddleWare(proxyOption)); // 应用代理

// 将文件 serve 到 port 3000。
app.listen(3200, function () {
  console.log('React app listening on port 3200!\n');
});