// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').parse()
// }


const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))

//process.env.DATABASE_URL
mongoose.connect('mongodb+srv://user:avi123@cluster0.bnx27.mongodb.net/mylibrary?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to mongoose'))

app.use('/', indexRouter);
app.use('/authors', authorsRouter);


port = process.env.PORT || 3000;
app.listen(port, function(req,res){
    console.log("server running at port " + port);
});

