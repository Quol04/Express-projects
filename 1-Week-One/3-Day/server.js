const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Define a simple route
app.use("/exercises", exerciseRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
