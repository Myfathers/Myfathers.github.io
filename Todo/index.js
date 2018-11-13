var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//路由模块
var indexRouter = require('./routes/indexRouter');
var deleteRouter = require('./routes/deleteRouter');
var editRouter = require('./routes/editRouter');
var toggleRouter = require('./routes/toggleRouter')
    // 静态文件托管,最要是对css和js引入
app.use(express.static('public'));

//设置js引擎
app.set('views', './views');
app.set('view engine', 'ejs');
// 引入路由

//处理Post求情的
app.use(bodyParser.urlencoded({
        extended: false
    }))
    //设置中间件，路由
app.use('/', indexRouter);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);
app.use('/toggle', toggleRouter)

app.listen(8888, () => {
    console.log("App listening on port 8080!");
});