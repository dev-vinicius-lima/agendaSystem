import express from 'express';
import mongoose from 'mongoose';
const app = express();

mongoose.connect(
  'mongodb+srv://viniciusfhlima:NLPPY13cqMb6fZ3f@agendasystem.twiuj5a.mongodb.net/?retryWrites=true&w=majority&appName=agendaSystem',
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database Connected successfully!');
});

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cadastro', (req, res) => {
  res.render('create');
});

app.listen(3333, () => {
  console.log('executing on port 3333!');
});
