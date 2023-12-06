// const knex = require('./db');

const express = require('express');
const app = express();
const port = 3000;

const studentRoutes = require('./src/student/routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});
app.use('/api/v1/students', studentRoutes);

app.listen(port, () => console.log('app listing on port', port));
