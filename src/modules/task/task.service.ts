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

  console.log(query);

  if (isDefined(lookupDto.limit) && isDefined(lookupDto.offset)) {
    return taskModel.find(query).skip(query.offset).limit(query.limit);
  }

  return taskModel.find(query).exec();
};

export const createTask = (createDto: CreateDto) => {
  const task: any = {
    userName: createDto.userName,
    name: createDto.name,
    description: createDto.description,
    finishesAt: createDto.finishesAt,
  };

  return taskModel.create(task);
};

export const updateTask = (updateDto: UpdateDto) => {
  const task: any = {};

  if (isDefined(updateDto.userName)) {
    task.userName = updateDto.userName;
  }

  if (isDefined(updateDto.name)) {
    task.name = updateDto.name;
  }

  if (isDefined(updateDto.description)) {
    task.description = updateDto.description;
  }

  if (isDefined(updateDto.finishesAt)) {
    task.finishesAt = updateDto.finishesAt;
  }

  return taskModel.findOneAndUpdate({ _id: updateDto.id }, task);
};

export const deleteTask = (deleteDto: DeleteDto) => {
  return taskModel.findOneAndDelete({ _id: deleteDto.id });
};
