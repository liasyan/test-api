const get = require('../operations/getData');
const config = require('../config');

module.exports = () => {
    return async (req, res) => {
        try {
            const result = await get({query: req.query});
            if (result?.length) {
                res.render('table', { data: result });
            } else {
                res.render('notFound', { text: config.no_data_message });
            }
        } catch (err){
            res.status(500).send(err.message);
        }
    }
}

