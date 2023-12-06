/** ROUTES RELATED TO HOME */

// IMPORTAR OBJ Router
const { Router } = require('express');

const router = Router();

// Ruta landing page '/'
router.get("/", (req, res) => {

     /**
     * Funcion 'render' de EJS indicando nombre de plantilla.
     * Ruta a carpeta views definida en settings.
     * render(view: string, dynamic_data: obj): html
    */
    res.render('index', {
        title: "Landing page"
    })
});

// Ruta 'about'
router.get("/about", (req, res) =>{
    // res.send('About page content');

    var title = 'About page title';
    res.render('about', { title });
});

// Ruta 'dashboard'
router.get("/dashboard", (req, res) =>{
    // res.send('Dashboard page content');

    var title = 'Dashboard page title';
    var coins = [
        {
            id: 1,
            name: "bitcoin",
            ticket: "BTC"
        },
        {
            id: 2,
            name: "ethereum",
            ticket: "ETH"
        },
        {
            id: 3,
            name: "tether",
            ticket: "USDT"
        },
        {
            id: 4,
            name: "BNB",
            ticket: "BNB"
        },
    ]

    res.render('dashboard', {
        title,
        coins
    });
});

// Ruta 'users'
router.get("/users", (req, res) =>{
    // res.send('Users page content');

    var title = 'Users page title';
    var subTitle = 'List of current users';
    var usersList = false;

    res.render('users', { 
        title,
        subTitle,
        usersList
    });
});

module.exports = router;