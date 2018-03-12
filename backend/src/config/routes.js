const express = require('express')

module.exports = function (server) {
    
    // Rotas API 
    const router = express.Router()
    server.use('/api', router)

    // Todo API
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}