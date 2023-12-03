/** ROUTES RELATED TO USER */

const { Router } = require('express');

const router = Router();

router.all('/UserName', (req, res)=>{
    res.send('Username route');
});

router.all('/profile', (req, res)=>{
    console.log(req.body);
    res.send('PROFILE route');
});

module.exports = router;