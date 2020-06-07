const dbconn = require('../database/index')

module.exports = {
    store(req, res) {
        const { nome, crm, especialidade } = req.body;
        const sql = 'INSERT INTO medico SET ?'
        dbconn.query(sql, { nome, crm, especialidade }, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    index(req, res) {
        dbconn.query('select * from medico', (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    update(req, res) {
        const { id } = req.params;
        const { nome, crm, especialidade } = req.body;
        let sql = `UPDATE medico SET nome = '${nome}', crm = '${crm}', especialidade = '${especialidade}' `;
        sql += 'WHERE id = ?'
        dbconn.query(sql, id, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    destroy(req, res) {
        const { id } = req.params;
        const sql = 'DELETE FROM medico WHERE id = ' + parseInt(id)
        dbconn.query(sql, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    }
}