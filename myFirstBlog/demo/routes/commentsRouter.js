var express = require('express');
var router = express.Router();
var comments = require('../models/comments');
var Post = require('../models/Post');


router.post('/:postId', function(req, res, next) {
    if (!req.session.user) {
        req.flash("error", '留言需要登陆');
        return res.redirect('/login');
    }
    next()
}, (req, res) => {
    var content = req.body.content
    var postId = req.params.postId
    var author = req.session.user._id
    try {
        if (!content) {
            throw new Error('评论内容不能为空')
        }
    } catch (e) {
        req.flash("error", e.message);
        res.redirect('back');
        return
    }
    comments.create({
        postId: postId,
        content: content,
        author: author
    }, (err, result) => {
        if (err) {
            console.log('发布留言失败')
        }

        req.flash("success", '发布留言成功');
        console.log('发布留言成功')
        res.redirect('back');
        Post.findById(postId, function(err, updateDate) {
            Post.findByIdAndUpdate(postId, {
                comments: updateDate.comments + 1
            }, function(err, resutl) {
                if (err) {
                    req.flash('error', '没有更新到');
                    res.redirect('/posts');
                }
            })

        })
    })

});
router.get('/:commentsId/remove', function(req, res) {
    var commentsId = req.params.commentsId
    var user = req.session.user
    comments.findById(commentsId, function(err, searcheData) {
        if (user) {
            if (user._id == searcheData.author) {
                comments.findByIdAndRemove(commentsId, function(err, removeData) {
                    req.flash('success', '删除留言成功');
                    res.redirect('back');
                    console.log('删除留言成功');
                    Post.findById(removeData.postId, function(err, findDate) {

                        Post.findByIdAndUpdate(removeData.postId, {
                            comments: findDate.comments - 1
                        }, function(err, updateDate) {
                            if (err) {
                                req.flash('error', '更新失败')
                                res.redirect('back');
                            }
                        })
                    })
                })

            }

        }
    })


})


module.exports = router