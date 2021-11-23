const express = require('express')
const router = express.Router()
const dados = require('./dados')

function Consulta() {
    const personagem = {

        "nome": dados.slug,
        "casa": dados.name
    }

    return personagem
}

router.get('/personagem', function (req, res) {
    //const isFiltro = req.query.filtro == 'slug'

    let personagem = Consulta()
    let mensagem = `${personagem.casa}`
    
    //res.send(`${personagem.Consulta}`)
    res.send(mensagem)
})


/*
let personagem = Consulta()

router.get('/personagem', function (req, res) {
    const isFiltro = req.query.filtro == 'slug'

    res.query(`${personagem.name}`)
})
*/
module.exports = router