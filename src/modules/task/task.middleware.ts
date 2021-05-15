import { Request, Response, NextFunction } from 'express';

import { CreateDto, DeleteDto, LookupDto, UpdateDto } from './dto';
import { handleErrors } from '../../shared/helpers';

export const validationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    switch (req.method) {
      case 'GET':
        const lookupDto = new LookupDto(req.query);
        await handleErrors(lookupDto);
        break;

      case 'POST':
        const createDto = new CreateDto(req.body);
        await handleErrors(createDto);
        break;

      case 'PATCH':
        const updateDto = new UpdateDto(req.body);
        await handleErrors(updateDto);
        break;

      case 'DELETE':
        const deleteDto = new DeleteDto(req.query);
        await handleErrors(deleteDto);
        break;

      default:
        return next();
    }

    next();
  } catch (error) {
    next(error);
  }
};
