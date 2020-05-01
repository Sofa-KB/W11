const router = require("express").Router();
const db = require("../db/db");

router.get("/notes", function(req, res) {
  db
    .getNotes()
    .then(notes => res.json(notes))
});

router.post("/notes", (req, res) => {
  db
    .addNote(req.body)
    .then((note) => res.json(note))
});

router.delete("/notes/:id", function(req, res) {
  db
    .removeNote(req.params.id)
    .then((res) => res.json(res))
});

module.exports = router;