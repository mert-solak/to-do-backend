import { Request, Response, NextFunction } from 'express';

import { CreateDto, DeleteDto, LookupDto, UpdateDto } from './dto';
import { handleErrors } from '../../shared/helpers';

export const validationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    switch (req.method) {
      case 'GET':
        const lookupDto = new LookupDto(req.params);
        await handleErrors(lookupDto);
        break;

      case 'POST':
        const createDto = new CreateDto(req.params);
        await handleErrors(createDto);
        break;

      case 'PATCH':
        const updateDto = new UpdateDto(req.params);
        await handleErrors(updateDto);
        break;

      case 'DELETE':
        const deleteDto = new DeleteDto(req.params);
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
