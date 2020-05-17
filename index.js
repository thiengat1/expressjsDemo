const express = require('express');
const app = express();
const port = 3000;
var userRouter=require('./routes/user.route');

const bodyParser = require('body-parser');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');



app.get('/', (req, res) => res.render('index',{
	name:'AAAA'
}));

app.use('/users',userRouter);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
