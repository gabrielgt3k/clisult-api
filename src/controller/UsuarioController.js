const dbconn = require('../database/index')

module.exports = {
    store(req, res) {
        const { nome, email, senha } = req.body;
        const sql = 'INSERT INTO usuario SET ?';
        dbconn.query(sql, { nome, email, senha }, (err, results, fields) => {
            if(err) {
                return res.json({ status: 400, message: 'alguma coisa errada na query' })
            }
            return res.json({ status: 200, error: null, response: results })
        })
    },

    autenticar(req, res) {
        const { email, senha } = req.body;
        const sql = 'SELECT * FROM usuario WHERE email = ?'
        dbconn.query(sql, [email], (err, results, fields) => {
            if(err) {
                return res.json({ status: 400, message: 'alguma coisa errada na query' })
            }
            else {
                if(results.length > 0) {
                    if(senha == results[0].senha) {
                        return res.json(results)
                    }
                    else {
                        return res.json({ status: 400, message: 'Email ou senha não encontrados.' })
                    }
                }
                else {
                    return res.json({ status: 400, message: 'Email não existe.' })
                }
                
            }
        })
    }
}