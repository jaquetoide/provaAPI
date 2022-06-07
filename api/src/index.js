import 'dotenv/config'

import heroiController from './controller/heroiController';
import heroiRepository from './repository/heroiRepository';

import express from 'express'; 
import cors from 'cors';

const server = express();
server.use (cors());
server.use(express.json());

server.use(heroiController);
server.use(heroiRepository);

server.listen(process.env.PORT,() => console.log (`API conectada na porta ${process.env.PORT}`));

