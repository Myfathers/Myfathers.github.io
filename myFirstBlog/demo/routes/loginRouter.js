var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Post = require('../models/Post');


router.get('/', function(req, res) {
    res.render('login');
});
router.post('/', function(req, res) {
    var username = req.body.username
    var password = req.body.password

    try {
        if (!username) {
            throw new Error('用户名不能为空')
        }
        if (!password) {
            throw new Error('密码不能为空')
        }

    } catch (e) {


        req.flash("error", e.message);
        res.redirect('back');
        // 阻止代码继续向下执行 校验错误就不要写入数据库
        return
    }
    User.findOne({
        username: username,

    }, function(err, result) {

        if (err) {
            console.log('查找用户失败');
        }
        if (!result) {
            console.log('没有此对象');
            req.flash("error", '没有此用户');
            res.redirect('back');
        }
        if (result.password != password) {
            console.log('密码错误');
            req.flash("error", '密码错误');
            res.redirect('back');
        } else {
            console.log('登录成功')
            req.session.user = result
            req.flash("success", '登录成功');
            res.redirect('/posts?author=' + result._id);

        }
    })


})
module.exports = router;