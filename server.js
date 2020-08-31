const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Hair Intentions</h1>');
});

app.listen(3000, () => {
    console.log("listening on port 3000")
});