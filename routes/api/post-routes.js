const router = require('express').Router();
const { User, Post } = require('../../models');


router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'user_id'],
        include: {
            model: User,
            attributes: ['username']
        }
    }).then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
})
// router.get('/:id', (req, res) => {
//     Post.findOne({
//         where: {
//             id: req.params.id
//         }
//     })

// })


// router.post('/', (req, res) => {

// })

// router.put('/:id', (req, res) => {

// })

module.exports = router;