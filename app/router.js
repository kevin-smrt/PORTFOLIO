// Récupère la classe Router du module express
const { Router } = require("express");
// Récupère le controller qui gère les mails
const mailController = require('./controllers/mailController');


// Initialisation du router
const router = Router();

// Page d'accueil
router.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/index.html");
});

// Route pour envoyer un mail
router.post("/mail", mailController.sendMail);

// Si aucune route n'est trouvée => 404
router.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});

module.exports = router;