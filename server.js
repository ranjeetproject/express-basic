const express = require('express');
const path = require('path');
const mainRouter = require('./routes/index.js')
const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine','ejs');

//console.log(app.get('view engine'))
//console.log(app.get('views'))

app.use(express.static('public'));

app.use('/',mainRouter);

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname)+'/index.html');
// });

// app.get('/about',(req,res)=>{
//     res.sendFile(path.resolve(__dirname)+'/about.html');
// });

    // app.get('/',(req,res)=>{
    //         res.render('index',{
    //             title:"My Home Page",
    //         });
    //     });

    // app.get('/about',(req,res)=>{
    //     res.render('about',{
    //         title:"My About Page",
    //     });
    // });



// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname)+'/about.html');
// });


app.listen(PORT,()=>{
    console.log('Listening On Port 3000');
});