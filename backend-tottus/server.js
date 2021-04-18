const express = require('express');
const cors = require('cors')

const apiRoute = require('./app/routes/api.route');

app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/', apiRoute);

app.listen(3000, () => console.log('conectado'));
