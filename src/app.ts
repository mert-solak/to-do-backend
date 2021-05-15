import express from 'express';
import path from 'path';
import logger from 'morgan';
import http from 'http';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import { dbConfig } from './configs/db.config';
import taskRouter from './routes/task';

mongoose.connect(`mongodb://${dbConfig.username}:${dbConfig.password}@localhost:27017`, { useNewUrlParser: true });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/tasks', taskRouter);

const port = process.env.PORT || '3000';

const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ';
  console.log('Listening on ' + bind);
};

const server = http.createServer(app);

server.on('error', onError);
server.on('listening', onListening);

server.listen(port);

module.exports = app;
