import express from 'express';
import path from 'path';
import logger from 'morgan';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import { dbConfig, urlConfig, loggerConfig } from './shared/configs';

import taskRouter from './modules/task/task.router';
import { CustomError } from './shared/utils';
import { CustomErrorsEnum } from './shared/enums';

mongoose.connect(`mongodb://${dbConfig.username}:${dbConfig.password}@localhost:27017`, { useNewUrlParser: true });

const app = express();

if (loggerConfig.isOpen) {
  app.use(logger(loggerConfig.type));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(urlConfig.tasks, taskRouter);

app.use((err, req, res, next) => {
  if (err && err.errorCode) {
    res.status(err.status);
    return res.send(err);
  }

  next(new CustomError(CustomErrorsEnum.UNHANDLED_ERROR));
});

export default app;
