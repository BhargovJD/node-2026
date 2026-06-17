const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRoutes = require('./routes/person');
const menuRoutes = require('./routes/menu');

app.get('/', function(req, res){
    res.send('This is home page')
});

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});