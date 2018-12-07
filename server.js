const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.send({
        name: 'Mitch',
        age: 25,
        likes: [
            'Music',
            'Biking'
        ]
    })
});

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.get('/bad', (req, res) => {
    res.status(400).send('Bad Request')
})

app.listen(3000);