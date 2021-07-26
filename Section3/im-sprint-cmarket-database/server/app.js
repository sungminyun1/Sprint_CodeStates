const express = require('express');
const router = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const controller = require('./controllers');

const app = express();
const port = 4000;

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
app.use(cors());
app.use(express.json());
app.use('/users', router);
app.get('/items', controller.items.get);
module.exports = app.listen(port, () => {
  console.log(`🚀 Server is starting on ${port}`);
});
