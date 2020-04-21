const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;

const feedingRoutes = require('./routes/feeding');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/feeding', feedingRoutes);
app.get('/', (req, res) => {
	res.send('Home');
});

// Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		console.log(err);
		console.log('Connected to DB');
	}
);

app.listen(port, () => {
	console.log(`Started on: ${port}`);
});
