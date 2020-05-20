const express = require('express');
const app = express();
const port = 3000;
var userRouter=require('./routes/user.route');
var authRouter=require('./routes/auth.route');

var authMiddleware=require('./middlewares/auth.middleware');

const bodyParser = require('body-parser');
var cookieParser=require('cookie-parser');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use(cookieParser('fsfsdfsfsdfsd43w432'));



app.get('/', (req, res) => res.render('index',{
	name:'AAAA'
}));

app.use('/users',authMiddleware.requireAuth,userRouter);
app.use('/auth',authRouter);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
