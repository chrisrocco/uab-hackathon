"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require('axios');
exports.subscribeToMailingList = function (req, res) {
    axios({
        method: "POST",
        url: "https://api.mailgun.net/v3/lists/" + process.env.MAILGUN_MAILING_LIST + "@" + process.env.MAILGUN_DOMAIN + "/members",
        auth: {
            username: 'api',
            password: process.env.MAILGUN_SECRET
        },
        params: {
            name: 'Website User',
            address: req.body.email,
            subscribed: true,
            upsert: 'yes'
        }
    }).then(function (mgRes) {
        console.log(mgRes);
        res.send({
            'msg': "You have been added to our mailing list!"
        });
    }, function (err) {
        console.log(err);
        res.status(400).send({
            err: 'Oops, something went wrong'
        });
    });
};
