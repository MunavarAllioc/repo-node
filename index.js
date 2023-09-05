const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello World...! from Node App')
});

app.listen(PORT, () => {
    console.log(`Running at PORT: ${PORT}`)
});