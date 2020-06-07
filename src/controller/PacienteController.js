const dbconn = require('../database/index')

module.exports = {
    store(req, res) {
        const { nome, idade, cpf } = req.body;
        let sql = 'INSERT INTO paciente SET ?';
        dbconn.query(sql, { nome, idade, cpf }, (err, results, fields) => {
            if (err) {
                return res.json(err);
            }
            return res.json({ status: 200, error: null, response: req.body })
        })
    },
    index(req, res) {
        const sql = 'SELECT * FROM paciente'
        dbconn.query(sql, (err, results, fields) => {
            if (err) throw err;
            return res.send(JSON.stringify(results))
        })
    },
    findByCpf(req, res) {
        const { cpf } = req.params;
        const sql = `SELECT * FROM paciente WHERE cpf = '${cpf}'`
        dbconn.query(sql, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    findById(req, res) {
        const paciente_id = req.params.id;
        const sql = 'SELECT * FROM paciente WHERE id = ?'
        dbconn.query(sql, paciente_id, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    findByNome(req, res) {
        const { nome } = req.params;
        const sql = `SELECT * FROM paciente WHERE nome LIKE '${nome}%'`
        dbconn.query(sql, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    update(req, res) {
        const { id } = req.params;
        const { nome, idade, cpf } = req.body;
        const sql = `UPDATE paciente SET nome = '${nome}', idade = ${idade}, cpf = '${cpf}' WHERE id = ?`
        dbconn.query(sql, id, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    destroy(req, res) {
        const { id } = req.params;
        const sql = 'DELETE FROM paciente WHERE id = ' + parseInt(id)
        dbconn.query(sql, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    }
}