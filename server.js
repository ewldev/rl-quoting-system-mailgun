// Chunk1
const exp = require('constants');
const express = require('express');
const res = require('express/lib/response');

const log = console.log;
const app = express();
const path = require('path')

const PORT = 8080;

// Chunk2
// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    // TODO:
    // send email here
    console.log('Data:', req.body);
    res.json({ message: 'Message received!!!' })
});



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    log('Server is starting on PORT,', 8080);
});