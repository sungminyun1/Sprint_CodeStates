const db = require('../../models/index').url;
const { getUrlTitle, isValidUrl } = require('../../modules/utils');

module.exports = {
    get: async (req, res) => {
        const data = await db.findAll();
        res.status(200).json(data);
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const data = await db.findByPk(id);
        const result = await data.increment("visits", {by: 1});
        res.status(302).redirect(result.url);
    },

    post: (req, res) => {
        const url = req.body.url;
        if(!isValidUrl(url)) {
            res.status(404).send('Bad Request.');
        }
        getUrlTitle(url, (err, title) => {
            if(err) {
                res.status(404).send('Bad Request');
            } else {
                db.create({
                    url: url,
                    title: title
                })
                .then((result) => {
                    res.status(201).json(result);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send("It's Error");
                });
            }
        });
    }
}