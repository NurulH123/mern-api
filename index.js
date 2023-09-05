const express = require('express');

const app = express();

app.use(() => {
    console.log('Server connected...');
})
app.listen(4000)