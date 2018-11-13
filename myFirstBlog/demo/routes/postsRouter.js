var express = require('express');
var router = express.Router();
var Post = require('../models/Post');
var url = require('url');
var comments = require('../models/comments');


router.get('/', function(req, res) {
    var author = url.parse((req.url), true).query.author;
    var whereStr;
    if (!author) {
        whereStr = {}
    } else {
        whereStr = {
            author: author,
        }
    }
    Post.find(whereStr).sort({ _id: -1 }).populate('author').exec(function(err, result) {
        if (err) {
            console.log('根据用户查找文章失败')
        }

        res.render('post-list', {
            constent: result
        });



    })


    // res.render('create');

});
router.get('/create', (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next()
}, function(req, res) {
    res.render('create');
});
router.post('/create', function(req, res) {
    var title = req.body.title;
    var content = req.body.content;

    var author = req.session.user._id

    try {
        if (!title) {
            throw new Error('没有标题');
        }
        if (!content) {
            throw new Error('没有写入内容');
        }
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('back');
        return

    }
    Post.create({
        title: title,
        content: content,
        author: author
    }, function(err, resutl) {
        console.log('发表文章成功')
        req.flash('success', '发表文章成功')
        res.redirect('/posts/' + resutl._id);

    })

})
router.get('/:postId', function(req, res) {
    var postId = req.params.postId;

    Post.findById(postId).populate('author').exec(function(err, resutl) {

        if (err) {
            console.log('查找失败');
        }
        Post.findByIdAndUpdate(postId, {
            pv: resutl.pv + 1
        }, (err1, result1) => {

        })

        comments.find({
            postId: postId,
        }).populate('author').exec(function(err, result1) {

            res.render('post-detail', {
                contents: resutl,
                constent2: result1,
            })
        })


    })

})

router.get('/:postId/remove', function(req, res) {
    var postId = req.params.postId;
    Post.findById(postId, function(err, removeFind) {
        if (err) {
            req.flash('error', '查找文章失败');
            res.redirect('back');
        }
        if (req.session.user) {
            if (removeFind.author == req.session.user._id) {
                Post.findByIdAndRemove(postId, function(err, removeDetele) {
                    req.flash('success', '删除文章成功');
                    console.log('删除文章成功')
                    res.redirect('/posts');

                })

            } else {
                req.flash('error', '删除文章失败，你没有权限');
                res.redirect('back');
            }
        } else {
            req.flash('error', '需要你重新登录');
            res.redirect('/login');
        }

    })
})

router.get('/:postId/edit', function(req, res) {
    var postId = req.params.postId;
    var user = req.session.user;
    if (user) {

        Post.findById(postId, function(err, update) {
            if (err) {
                req.flash('编写文章失败');
                res.redirect('back');
            }
            var author = update.author
            if (author == user._id) {
                res.render('edit', {
                    update: update
                })
            } else {
                req.fresh('error', '权限不够，你不是本号主人');
                rq.redirect('back');
            }



        })
    } else {
        req.fresh('error', '需要登录');
        rq.redirect('/login');
    }


})
router.post('/:postId/edit', function(req, res) {
    var postId = req.params.postId
    var title = req.body.title
    var content = req.body.content
    var user = req.session.user;
    // Post.findById
    try {
        if (!title) {
            throw new Error('没有标题');
        }
        if (!content) {
            throw new Error('没有写入内容');
        }
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('back');
        return

    }
    Post.findById(postId).populate('author').exec(function(err, updateContent) {
        if (err) {
            req.flash('error', '查找失败');
            res.redirect('back');
        }
        if (user._id == updateContent.author._id) {
            Post.findByIdAndUpdate(postId, {
                title: title,
                content: content,
            }, function(err, result) {
                if (err) {
                    req.flash('error', '写入失败');
                    res.redirect('back');
                }
                req.flash('success', '写入文章成功');
                console.log('修改文章成功')
                res.redirect('/posts/' + result._id)
            })
        } else {
            req.flash('error', '还未登录');
            res.redirect('/login');
        }
    })


})




module.exports = router;