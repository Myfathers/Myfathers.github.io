var express = require('express');
var router = express.Router();
var User = require('../models/User');
router.get('/', function(req, res) {
    req.session.user = null,
        req.flash("success", '退出成功');
    res.redirect('/login');
    console.log('退出成功');
});

router.get('/:deleteId/delete', function(req, res) {
    var deleteId = req.params.deleteId
    if (req.session.user) {
        if (deleteId == req.session.user._id) {
            User.findById(deleteId, function(err, resutl) {
                if (err) {
                    console.log('没有找到用户');
                    req.flash('error', '查找用户失败');
                    res.redirect('back');
                }
                User.findByIdAndRemove(deleteId, function(err, removeUser) {
                    if (err) {
                        console.log('删除账户失败');
                        req.flash('error', '删除账户失败');
                        res.redirect('back');
                    }
                    req.session.user = null,
                        req.flash('success', '注销账号成功');
                    res.redirect('/login');
                    console.log('注销账号成功')
                })

            })
        } else {
            req.flash('error', '没有权限');
            res.redirect('back');
        }
    } else {
        req.flash('error', '需要登录');
        res.redirect('/login');
    }


});
module.exports = router;