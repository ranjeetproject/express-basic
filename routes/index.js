const express = require("express");
const router = express.Router();
const apiKeyMiddleWare = require('../middlewares/apiKey.js')

router.use(apiKeyMiddleWare)

router.get('/',(req,res)=>{
    res.render('index',{
        title:"My Home Page",
    });
});

router.get('/about',(req,res)=>{
    res.render('about',{
        title:"My About Page",
    });
});


router.get('/api/products',apiKeyMiddleWare,(req,res)=>{
    res.json([
        {
            id:"123",
            name:"Chrome"
        },
        {
            id:"124",
            name:"FireFox"
        }
    ])
});


// router.get('/api/products',apiKeyMiddleWare,(req,res)=>{ //Route Middleware
//     res.json([
//         {
//             id:"123",
//             name:"Chrome"
//         },
//         {
//             id:"124",
//             name:"FireFox"
//         }
//     ])
// });


module.exports = router;