const express = require('express');
const app = express();

const db = require('./config/dbConn.ts');

const PORT = process.env.SERVER_PORT;

const SEQUELIZE = db.connect();

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`)
});