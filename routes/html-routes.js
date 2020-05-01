const path = require("path")
const routes = require("express").Router()

routes.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

routes.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = routes;