const express = require('express');


const bodyParser = require('body-parser');

// const apiRouter = require('./routes/api.js');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended:true}));

// require('./db');


// app.get('/', (req, res)=>{
//     res.send('welcome');

// });

// app.use('/api', apiRouter);

app.listen(3000, ()=>{
    console.log('Server listo')
});
