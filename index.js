const express = require('express');
const app = express();

// middleware to read JSON
app.use(express.json());

// temporary storage

let notes = []

// HOME ROUTE
app.get('/', (req, res) => {
  res.send("Simple Notes API is running");
});

// CREATE a note
app.post('/notes', (req, res) => {
  const note = req.body;
  notes.push(note);
  res.send("Note added successfully");
});

// READ all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// UPDATE a note
app.put('/notes/:id', (req, res) => {
  const id = req.params.id;
  notes[id] = req.body;
  res.send("Note updated");
});

// DELETE a note
app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  notes.splice(id, 1);
  res.send("Note deleted");
});

// SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
