const router = require('express').Router();
const { Post, User } = require('../models');
const sequelize = require('../config/connection')


router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'user_id', 'created_at'],
        order: [['created_at', 'DESC']],
        include: {
            model: User,
            attributes: ['username']
        }
    }).then(dbPostData => {
        // pass a single post object into the homepage template
        // console.log(dbPostData[0])
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    })
        // res.json(dbPostData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
})

router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;