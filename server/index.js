const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./models');
const cors = require('cors');

const app = express();

// dotenv config
dotenv.config({ path: './config/config.env' });

// middleware
app.use(express.json());
app.use(cors());

// connectDB
connectDB();

// routers
const postRoutes = require('./routes/posts');
app.use('/api/posts', postRoutes);

const errorHandler = require('./middleware/errors');
app.use(function (req, res, next) {
  const error = new Error();
  error.message = 'Not Found';
  error.status = 404;
  next(error);
});
app.use(errorHandler);

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
