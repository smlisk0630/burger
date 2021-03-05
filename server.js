const express = require('express');
const exphbs = require('express-handlebars');
const orm = require('/.config/orm');

// Create express app instance
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Routes
app.get('/', (req, res) => {
    orm.selectAll('burger', function(result) {
        res.render('list', { burger: result });
    });
});

app.post('/', (req, res) => {
  orm.insertOne('burger', function(result) {
      res.render('list', { burger: result });
  });
});

app.put('/', (req, res) => {
  orm.updateOne('burger', function(result) {
      res.render('list', { burger: result });
  });
});

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);