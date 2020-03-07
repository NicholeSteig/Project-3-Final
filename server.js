const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gitfit");
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users.js');

app.use('/exercises', exercisesRouter);
app.use('/api', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
