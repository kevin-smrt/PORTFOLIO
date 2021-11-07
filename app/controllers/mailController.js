// Récupère les variables d'environnement
require('dotenv').config();
// Récupère le module nodemailer
const nodemailer = require('nodemailer');
const axios = require("axios").default;

const mailController = {
    // Crée le transporter, celui qui va envoyer le mail
    createTransporter: function () {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASSWORD
            },
        });

        return transporter;
    },

    // Créé les options qui vont être envoyés par le transporteur
    createOption: function (infos) {
        let mailOptions = {
            from: infos.email,
            to: process.env.MAIL,
            subject: `Nouveau Message kevinsanmartin.fr`,
            replyTo: infos.email,
            text: `
                Nom : ${infos.name}\n
                Mail : ${infos.email}\n
                Message : \n${infos.message}`,
        }
        return mailOptions;
    },

    sendMail: async function (req, res) {
        try {
            // Récupère toutes les données du formulaire de contact
            const infos = {
                name: req.body.name,
                email: req.body.email,
                message: req.body.message,
            };

            // Création du transporter
            const transporter = mailController.createTransporter();
            
            // Création des options d'envoie du mail
            const mailOptions = mailController.createOption(infos);

            // Envoie du mail
            await transporter.sendMail(mailOptions);

            return res.json({ "msg": "Merci pour votre message !" });

        } catch (error) {
            return res.status(500).send(error);
        }
    },
}

module.exports = mailController;