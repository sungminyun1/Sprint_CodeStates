const db = require('../../models/index');
const { getUrlTitle, isValidUrl } = require('../../modules/utils');

module.exports = {
    get: async (req, res) => {
        try {
            const data = await db.url.findAll();
            res.status(200).json(data);
        } catch(err) {
            console.log(err);
            res.status(500).send('Sorry, Not Found.');
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        try {
            const data = await db.url.findByPk(id);
            const result = await data.increment("visits", {by: 1});
            res.status(302).redirect(result.url);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
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
                db.url.findOrCreate({
                    where: {url: url},
                    defaults: {
                        title: title
                    }
                }) 
                .then(([result, created]) => {
                    if(!created) {
                        res.status(201).json(result);  // 이미 존재하기 때문에 find한 데이터
                    } else {
                        res.status(201).json(result);  // 새로 create
                    }
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send("It's Error");
                });
            }
        });
    }
}