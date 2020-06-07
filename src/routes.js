const express = require('express')
const dbconn = require('./database/index')
const routes = express.Router();

const pacienteController = require('./controller/PacienteController')
const consultaController = require('./controller/ConsultaController')
const medicoController = require('./controller/MedicoController')
const usuarioController = require('./controller/UsuarioController')

/**
 * 
 * AQUI AS ROTAS DE CADASTRAR, CONSULTAR, ALTERAR E EXCLUIR DO PACIENTES
 * RESPECTIVAMENTE.
 * 
 * FILTRAREI A TABELA paciente POR NOME, ID E CPF.
 * 
 */
routes.post('/pacientes', pacienteController.store)

routes.get('/pacientes', pacienteController.index)

routes.get('/pacientes/nome/:nome', pacienteController.findByNome)

routes.get('/pacientes/:id', pacienteController.findById)

routes.get('/pacientes/cpf/:cpf', pacienteController.findByCpf)

routes.patch('/pacientes/:id', pacienteController.update)

routes.delete('/pacientes/:id', pacienteController.destroy)
/**
 * 
 * AQUI AS ROTAS DE CADASTRAR, CONSULTAR, ALTERAR E EXCLUIR DAS CONSULTAS
 * RESPECTIVAMENTE.
 * 
 */
routes.post('/consulta', consultaController.store)
routes.get('/consulta', consultaController.index)
routes.patch('/consulta/:id', consultaController.update)
routes.delete('/consulta/:id', consultaController.destroy)
/**
 * 
 * AQUI AS ROTAS DE CADASTRAR, CONSULTAR, ALTERAR E EXCLUIR DOS MEDICOS
 * RESPECTIVAMENTE.
 * 
 */
routes.post('/medicos', medicoController.store)
routes.get('/medicos', medicoController.index)
routes.patch('/medicos/:id', medicoController.update)
routes.delete('/medicos/:id', medicoController.destroy)

//cadastrar usuario
routes.post('/usuarios', usuarioController.store)
//autenticar usuaio
routes.post('/autenticar', usuarioController.autenticar)

module.exports = routes;