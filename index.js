const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug')
app.set('views', './views')

var users=[
	{id:1,name:'lewis'},
	{id:2,name:'owen'}
	];
app.get('/', (req, res) => res.render('index',{
	name:'AAAA'
}));
app.get('/users', (req, res) => res.render('users/index',{
	users:users
}));

app.get('/users/search',(req, res)=>{
	var q=req.query.q;
	var marcheUsers=users.filter(user=>{
		return user.name.toLowerCase().indexOf(q.toLowerCase())!==-1;
	});
	res.render('users/index',{
		users:marcheUsers
	});

});
app.get('/users/create',(req,res)=>{
	res.render('users/create');

});
app.post('/users/create',(req,res)=>{
	users.push(res.body);
res.redirect('user/index')

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
