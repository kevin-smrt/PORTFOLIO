const express = require("express");
const router = require("./app/router");

const PORT = 3000;
const app = express();

app.use(express.json());
// On ajoute notre middleware qui intercept les données envoyer sous format urlencoded et les mets dans le body
app.use(express.urlencoded({
    extended: true
}));

// on définit le dossier des ressources statiques
app.use(express.static("./public"));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
});