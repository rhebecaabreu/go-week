const express = require('express');
const app = express(); 

app.get('/', (req, res)=> {
    return res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Serve started on port 3000')
});