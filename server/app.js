const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router =require('./router/router.js')
const app = express();
const port = 3000;
const DB_URI = 'mongodb://localhost:27017/ecommerce'; 
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

app.use(cors());
app.use(express.json());   
app.use(express.urlencoded({ extended: true }));
app.use('/',router);

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});