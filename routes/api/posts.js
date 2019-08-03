const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Posts = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route   GET api/posts
// @desc    Get all posts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const posts = await Posts.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    };
});


// @route   GET api/posts/:id
// @desc    Get post by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        };
        res.json(post);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            // This is done to check it the error is about a malformatted ID on the query string, because if so (and not an actual server error), it's better to pass the same error message 'Post not found'
            return res.status(404).json({ msg: 'Post not found' });
        };
        res.status(500).send('Server Error');
    };
});


// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post('/', [auth, [
    check('text', 'Text is required').not().isEmpty()
]], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const user = await User.findById(req.user.id).select('-password');

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        });

        const post = await newPost.save();
        res.json(post);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    };
});

// This I changed a little from the original:

// @route   PUT api/posts/:id/like
// @desc    Like or remove like from a post
// @access  Private
router.put('/:id/like', auth, async (req, res) => {
    try {

        const post = await Posts.findById(req.params.id);

        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {

            // My edition, same PUT Request like and remove like from post
            // After all he was going to do 2 PUT requests, if one were a DELETE I would even understand
            post.likes = post.likes.filter(like => like.user.toString() !== req.user.id)
            await post.save();
            return res.json(post.likes);

            // ORIGINAL: return res.status(400).json({ msg: 'Post already liked' });
        };

        post.likes.unshift({ user: req.user.id });

        await post.save();

        res.json(post.likes)

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Not found' });
        };
        res.status(500).send('Server Error');
    };
});

// ID DID THIS TOO
// @route   PUT api/posts/:id/comments/:com_id/like
// @desc    Like or remove like from a comment
// @access  Private
router.put('/:id/comments/:com_id/like', auth, async (req, res) => {
    try {

        const post = await Posts.findById(req.params.id);

        const comment = post.comments.filter(com => com.id.toString() === req.params.com_id)[0];

        if (!comment) {
            return res.status(404).json({ msg: 'Not found' });
        };

        post.comments.forEach(comm => {
            if (comm.id.toString() === req.params.com_id) {
                if (comm.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                    comm.likes = comm.likes.filter(like => like.user.toString() !== req.user.id)
                } else {
                    comm.likes.unshift({ user: req.user.id });
                };
            };
        });

        await post.save();

        res.json(post);

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Not found' });
        };
        res.status(500).send('Server Error');
    };
});



// I CREATED THIS
// @route   PUT api/posts/:id/comments
// @desc    Create a comment
// @access  Private
router.put('/:id/comments', [auth, [
    check('text', 'Text is required').not().isEmpty()
]], async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        };

        const post = await Posts.findById(req.params.id);
        const user = await User.findById(req.user.id);

        if (!post || !user) {
            return res.status(404).send('Invalid parameters');
        };

        const newComment = {
            user: req.user.id,
            text: req.body.text,
            name: user.name,
            avatar: user.avatar
        };

        post.comments.unshift(newComment);

        post.save();

        res.json(post.comments)

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Not found' });
        };
        res.status(500).send('Server Error');
    };
});






// @route   DELETE api/posts/:id
// @desc    Delete a post by ID
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Not found' });
        };

        // Check if user is the same who wrote the post
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        };

        await post.remove();

        res.json({ msg: 'Post removed' });

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Not found' });
        };
        res.status(500).send('Server Error');
    };
});





// I DID THIS
// WORKS ALL RIGHT MOFO
// @route   DELETE api/posts/:id/comments/:com_id
// @desc    Delete a comment by id
// @access  Private
router.delete('/:id/comments/:com_id', auth, async (req, res) => {
    try {

        const post = await Posts.findById(req.params.id);

        const comment = post.comments.filter(com => com.id.toString() === req.params.com_id)[0];

        if (!comment) {
            return res.status(404).json({ msg: 'Not found' });
        }

        post.comments = post.comments.filter(com => com.id.toString() !== req.params.com_id);

        post.save();

        res.json(post)

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Not found' });
        };
        res.status(500).send('Server Error');
    };
});



module.exports = router;