// primeira etapa 

const express = require('express');
const cors = require('cors');

// inicializando o servidor
const server = express();

// inicializando o cors
server.use(cors());

server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.listen(4000, () => {
  console.log('API ONLINE!')
});