const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

//connect to the database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/pet', require('./routes/petRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on the post ${port}`));
