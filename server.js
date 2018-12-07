const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to this website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})

app.get('/bad', (req, res) => {
    res.status(400).send('Bad Request')
})

app.listen(3000);