const router = require('express').Router();
const passport = require('passport');



router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/auth/login');
});

router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
   res.redirect('/profile/');
});


module.exports = router;