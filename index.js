const express = require('express');
const clientsRouter = require('./routers/clients');

const PORT = 3006;
const app = express();

app.use(express.json());

app.use('/clients', clientsRouter);

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));