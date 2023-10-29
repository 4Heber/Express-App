const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// REFACTOR crear un archivo 'Routes' con las rutas definidas
// GET ALL
app.get('/products', (req, res) => {
    res.send('GET ALL PRODUCTS');
})
// POST
app.post('/products', (req, res) => {
    res.send('POST A PRODUCT');
})
// PUT
app.put('/products', (req, res) => {
    res.send('UPDATE A PRODUCT');
})
// DELETE
app.delete('/products/:id', (req, res) => {
    res.send('DELETE A PRODUCT');
})
// GET ONE
app.get('/products/:id', (req, res) => {
    res.send('GET A PRODUCT');
}) 

app.listen(3000);
console.log(`server on port: ${3000}`)