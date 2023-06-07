const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('nodemon worked auto restart');
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01299999922' },
    { id: 2, name: 'sabnooks', email: 'sabnooks@gmail.com', phone: '01299999922' },
    { id: 3, name: 'srabonti', email: 'srabonti@gmail.com', phone: '01299999922' },
    { id: 4, name: 'suchuna', email: 'suchuna@gmail.com', phone: '01299999922' },
    { id: 5, name: 'kobori', email: 'kobori@gmail.com', phone: '01299999922' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '01299999922' },
    { id: 7, name: 'shakira', email: 'shakira@gmail.com', phone: '01299999922' },
    { id: 8, name: 'Anta', email: 'anta@gmail.com', phone: '08976677' },
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id - 1];
    res.send(user);
});

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length +1;
    console.log('request', req.body);
    users.push(user);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'oranges', 'apple']);
});

app.listen(port, () => {
    console.log('Example app listening on port', port);
});