var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var User = require('../models/User');
var fs = require('fs');


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, req.body.username + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
})


router.get('/', function(req, res) {
    res.render('register');
});
router.post('/', upload.single('avatar'), (req, res) => {

    var username = req.body.username
    var password = req.body.password
    var gender = req.body.gender
    var profile = req.body.profile
    var avatar = req.file
    try {
        if (!username) {
            throw new Error('用户名不能为空')
        }
        if (!password) {
            throw new Error('密码不能为空')
        }
        if (!profile) {
            throw new Error('简介不能为空')
        }
        if (!avatar) {
            throw new Error('头像不能为空')
        }
    } catch (e) {
        // 注册失败，删掉头像文件
        if (avatar) {
            fs.unlink(avatar.path, (err) => {
                if (err) {
                    console.log('删除头像失败', err)
                } else {
                    console.log('删除头像成功')
                }
            })
        }

        req.flash("error", e.message);
        res.redirect('back');
        // 阻止代码继续向下执行 校验错误就不要写入数据库
        return
    }
    // var username = req.body.username
    // var password = req.body.password
    // var gender = req.body.gender
    // var profile = req.body.profile
    // var avatar = req.file

    User.create({
        username: username,
        password: password,
        gender: gender,
        profile: profile,
        avatar: avatar.filename
    }, (err, result) => {
        if (err) {
            console.log('写入失败')
        } else {
            console.log('用户存入数据库成功');
            req.session.user = result
            req.flash("success", '注册成功');
            res.redirect('/login');
        }
    })
})

module.exports = router;