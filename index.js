const express = require('express');
const app = express();

app.use(express.json());

const api = require('./router/get');

app.use('/', api);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log(`Server is running on port 3000!!!`)
})