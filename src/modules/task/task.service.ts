import { isDefined } from 'class-validator';

import { LookupDto, CreateDto, UpdateDto, DeleteDto } from './dto';
import { taskModel } from './task.model';

export const taskLookup = (lookupDto: LookupDto) => {
  let query: any = {};

  if (isDefined(lookupDto.filterBy) && isDefined(lookupDto.search)) {
    query = {
      ...query,
      [lookupDto.filterBy]: lookupDto.search,
    };
  }

  if (isDefined(lookupDto.limit) && isDefined(lookupDto.offset)) {
    return taskModel
      .find(query)
      .skip(+lookupDto.offset)
      .limit(+lookupDto.limit);
  }

  return taskModel.find(query).exec();
};

export const createTask = (createDto: CreateDto) => {
  const task: any = {};

  task.name = createDto.name;
  task.userName = createDto.userName;
  task.status = createDto.status;

  if (isDefined(createDto.finishesAt)) {
    task.finishesAt = createDto.finishesAt;
  }

  if (isDefined(createDto.description)) {
    task.description = createDto.description;
  }

  return taskModel.create(task);
};

export const updateTask = (updateDto: UpdateDto) => {
  const task: any = {};

  if (isDefined(updateDto.name)) {
    task.name = updateDto.name;
  }

  if (isDefined(updateDto.status)) {
    task.status = updateDto.status;
  }

  if (isDefined(updateDto.userName)) {
    task.userName = updateDto.userName;
  }

  if (isDefined(updateDto.finishesAt)) {
    task.finishesAt = updateDto.finishesAt;
  }

  if (isDefined(updateDto.description)) {
    task.description = updateDto.description;
  }

  return taskModel.findOneAndUpdate({ _id: updateDto._id }, task, { new: true });
};

export const deleteTask = (deleteDto: DeleteDto) => {
  return taskModel.findOneAndDelete({ _id: deleteDto._id });
};
