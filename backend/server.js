const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const dbconnection = require('./utils/dbconn');

const app = express();

const contactRoutes = require('./routes/contactRoutes');




app.use(bodyParser.json());
app.use('/api', contactRoutes);
app.use(cors());



dbconnection();



const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
