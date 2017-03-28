const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const DB = require('./helpers/DB');

app.get('/event/:id', (req, res) => {
  const db = new DB();

  db.query(`SELECT * FROM events WHERE id=${req.params.id}`)
    .then((results) => {
      res.send(results[0]);
    });
});

app.post('/rsvp', (req, res) => {
  const {eventId} = req.body;
  const db = new DB();
  let field = '';

  if (req.body.attending) {
    field = 'attending';
  } else if (req.body.maybe) {
    field = 'maybe';
  } else if (req.body.notAttending) {
    field = 'not_attending';
  }

  db.query(`UPDATE events SET ${field} = ${field}+1 WHERE id=${eventId} LIMIT 1`)
    .then(() => {
      res.status(204).send();
    });
});

app.listen(3001);