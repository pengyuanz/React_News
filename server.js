// 本地开发server 能力

const path = require("path");
import webpack from "webpack"; // es6 import
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "./webpack-dev-config";
import express from "express";
// import fs from "fs";
import httpProxy from "http-proxy";

// express server
const app = new express();
const port = 8888; // 监听的端口是3000 locahost:3000
const compiler = webpack(config);

//创建代理对象实例
const proxy = httpProxy.createProxyServer({});
app.use(
    webpackDevMiddleware(compiler, {
        noInfo: true, // 不显示编译信息
        publicPath: config.output.publicPath,
        stats: {
            colors: true
        }
    })
);
app.use(express.static("static"));
app.use(webpackHotMiddleware(compiler));


app.get("*", function(req, res) {
    //当路径中含有/news时，使用代理对象实例进行反向代理，获得百度新闻api返回值
    if (req.path.indexOf("/news") != -1) {
        proxy.web(req, res, {
            target: "https://m.news.baidu.com",
            secure: false,
            changeOrigin: true
        });
    } else {
    // 否则默认返回App应用
    res.sendFile(path.join(__dirname, "index.html"));
    }
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info(
            "==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.",
            port,
            port
        );
    }
});
