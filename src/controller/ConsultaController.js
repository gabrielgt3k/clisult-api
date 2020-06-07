const dbconn = require('../database/index')

module.exports = {
    store(req, res) {
        const { id_paciente, id_medico, descricao } = req.body;
        const sql = 'INSERT INTO consulta SET ?'
        dbconn.query(sql, { id_paciente, id_medico, descricao }, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    index(req, res) {
        let sql = 'select id_consulta,p.nome nome_paciente, m.nome nome_medico, '
        sql += ' descricao from consulta c'
        sql += ' LEFT JOIN paciente p on p.id = c.id_paciente'
        sql += ' LEFT JOIN medico m on m.id = c.id_medico'
        dbconn.query(sql, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    update(req, res) {
        const { id } = req.params;
        const { descricao } = req.body;
        const sql = `UPDATE consulta SET descricao = '${descricao}' WHERE id_consulta = ?`
        dbconn.query(sql, id, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    },
    destroy(req, res) {
        const { id } = req.params;
        const sql = 'DELETE FROM consulta WHERE id_consulta = ' + parseInt(id)
        dbconn.query(sql, (err, results, fields) => {
            if (err) throw err;
            return res.json({ status: 200, error: null, response: results })
        })
    }
}