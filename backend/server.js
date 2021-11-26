const express = require('express');
const route = require('./routes/index');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/', route)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});