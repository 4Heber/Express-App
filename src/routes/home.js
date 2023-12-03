/** ROUTES RELATED TO HOME */

// IMPORTAR OBJ Router
const { Router } = require('express');

const router = Router();

// Ruta 'about'
router.all("/about", (req, res) =>{
    res.send('About page content');
});

// Ruta 'dashboard'
router.all("/dashboard", (req, res) =>{
    res.send('Dashboard page content');
});

module.exports = router;