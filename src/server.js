const express = require('express');
const morgan = require('morgan');
const path = require('path'); // modulo path para concatenar directorios

const app = express();

// SETTINGS
app.set('case sensitive routing',true); // nombre reservado para rutas con case-sensitive :bool
app.set('appName','Express_REST_API');
app.set('port',3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

var products = [
    {
        id: 1,
        name: "laptop",
        price: 1200
    }
]

// REFACTOR crear un archivo 'Routes' con las rutas definidas
// GET ALL
app.get('/products', (req, res) => {
    res.json(products);
})

// POST
app.post('/products', (req, res) => {
    // dentro de un objeto nuevo '{ }', copia todo el elemento '...req.body' y le agrega un valor 'id: x'
    const newProduct = {...req.body, id: products.length + 1};
    products.push(newProduct);
    res.status(201).json(newProduct);
})

// PUT
app.put('/products', (req, res) => {

    const newData = req.body; // Datos para actualizar
    const productFound = products.find(
        (p) => {return p.id === parseInt(req.params.id)}
    );

    if(!productFound){
        return res.status(404).json({"message": "Product not found..."});
    }

    // Recorre todos los productos, si el id es igual al param id, actualiza los valores nuevos de newData, sino conserva el producto sin modificar.
    products = products.map((p) => {p.id === parseInt(req.params.id) ? {...p, ...newData} : p});

    res.json({
        "message": "Product updated successfully"
    })
})

// DELETE
app.delete('/products/:id', (req, res) => {

    const productFound = products.find(
        (p) => {return p.id === parseInt(req.params.id)}
    );

    if(!productFound){
        return res.status(404).json({"message": "Product not found..."});
    }

    products = products.filter(
        (p) => {p.id !== parseInt(req.params.id)}
    )

    res.sendStatus(204);
})

// GET ONE
app.get('/products/:id', (req, res) => {
    const productFound = products.find((p) => {return p.id === parseInt(req.params.id)});

    if(!productFound){ return res.status(404).json({ message: "Product not found" })}

    res.status(200).json(productFound);
}) 

// STATIC FILES CONFIG
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'uploads')));

// USING SETTING VAR
app.listen(app.get('port'));
console.log(app.get('appName') + `server on port: ` + app.get('port'));