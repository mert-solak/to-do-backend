import { NextFunction, Request, Response } from 'express';

import { CreateDto, DeleteDto, LookupDto, UpdateDto } from './dto';
import { taskLookup, createTask, updateTask, deleteTask } from './task.service';

export const taskLookupController = async (
  req: Request<LookupDto>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const lookupData = await taskLookup(req.params);

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

    res.send(task);
  } catch (error) {
    next(error);
  }
};

export const taskDeleteController = async (
  req: Request<DeleteDto>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await deleteTask(req.params);

    res.send(task);
  } catch (error) {
    next(error);
  }
};
