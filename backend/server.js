const express = require('express');
const route = require('./routes/index');
const app = express();
const port = 5000;

app.use(express.json());
app.use('/', route)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});