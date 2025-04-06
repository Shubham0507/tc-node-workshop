const express = require('express');
const routes= require('./app/routes/route');
const cors = require('cors');
const connectDB = require('./app/config/mongo');
const { basicAuth } = require('./app/middleware/basicAuth');

const port = 3001;

const app = express();
// Middleware
app.use(express.json());
app.use(cors());
connectDB();

app.use(basicAuth)
app.use("/api/v1/", routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
