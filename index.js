const express = require('express');
// const bodyParser = require('body-parser');
const clientsRouter = require('./routers/clients');
const data = require('./database')

const PORT = 3006;
const app = express();

app.use(express.json())

app.use('/clients', clientsRouter);

app.get('/', (req, res) => res.json(data));

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
