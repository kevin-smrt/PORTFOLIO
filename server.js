import express, { json, urlencoded, static } from "express";
import router from "./app/router";

const PORT = 3000;
const app = express();

app.use(json());
// On ajoute notre middleware qui intercept les données envoyer sous format urlencoded et les mets dans le body
app.use(urlencoded({
    extended: true
}));

// on définit le dossier des ressources statiques
app.use(static("./public"));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
});