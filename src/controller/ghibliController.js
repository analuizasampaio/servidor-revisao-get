const filmes = require("../model/ghibli.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(filmes)
}

module.exports = {
    getAll,
    getById
}