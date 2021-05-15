import { isDefined } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

import { CreateDto, DeleteDto, LookupDto, UpdateDto } from './dto';
import { CustomError } from '../../shared/utils';
import { CustomErrorsEnum } from '../../shared/enums';
import { taskLookup, createTask, updateTask, deleteTask } from './task.service';

export const taskLookupController = async (
  req: Request<any, any, any, LookupDto>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const lookupData = await taskLookup(req.query);

    res.send(lookupData);
  } catch (error) {
    next(error);
  }
};

export const taskCreateController = async (
  req: Request<any, CreateDto>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await createTask(req.body);

    res.send(task);
  } catch (error) {
    next(error);
  }
};

export const taskUpdateController = async (
  req: Request<any, UpdateDto>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await updateTask(req.body);

    if (!isDefined(task)) {
      throw new CustomError(CustomErrorsEnum.DATA_NOT_EXISTS);
    }

    res.send(task);
  } catch (error) {
    next(error);
  }
};

export const taskDeleteController = async (
  req: Request<any, any, any, DeleteDto>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await deleteTask(req.query);

    if (!isDefined(task)) {
      throw new CustomError(CustomErrorsEnum.DATA_NOT_EXISTS);
    }

    res.send(task);
  } catch (error) {
    next(error);
  }
};
