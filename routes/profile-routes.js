const router = require('express').Router();

const autoCheck = (req,res,next) => {
    if(!req.user){
        res.redirect('/auth/login');
    }else{
        next();
    }
};

router.get('/',autoCheck,(req,res)=>{
    res.render('profile',{user: req.user});
});

module.exports = router;