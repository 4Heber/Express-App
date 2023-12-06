/** ROUTES RELATED TO USER */

const { Router } = require('express');

const router = Router();
const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com/comments';

router.get('/comments', async (req, res)=>{

    const response = await axios.get(URL);

    res.render('comments', {
        comments: response.data
    });
});

router.all('/UserName', (req, res)=>{
    res.send('Username route');
});

router.all('/profile', (req, res)=>{
    console.log(req.body);
    res.send('PROFILE route');
});

module.exports = router;