var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var app = express();
var db = require('./lib/mongoose').db
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);
var flash = require("connect-flash");

// 使用 session
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 48 * 60 * 60 * 1000
    },
    store: new MongoStore({
        mongooseConnection: db
    })
}));
//设置flash中间件
app.use(flash());
app.use(function(req, res, next) {
        res.locals.user = req.session.user
        res.locals.success = req.flash('success').toString()
        res.locals.error = req.flash('error').toString()
        next()
    })
    //使用body-parser,为post请求
app.use(bodyParser.urlencoded({
        extended: false
    }))
    //使用静态托管
app.use(express.static(path.join(__dirname, 'public')));

// 设置模板路径
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set('view engine', 'ejs')
    //路由
app.use('/', require('./routes/indexRouter'));
app.use('/login', require('./routes/loginRouter'));
app.use('/register', require('./routes/registerRouter'));
app.use('/logout', require('./routes/logoutRouter'));
app.use('/posts', require('./routes/postsRouter'));
app.use('/comments', require('./routes/commentsRouter'));



app.listen(8888, function(err) {
    console.log('已成功连接==========8888');
});