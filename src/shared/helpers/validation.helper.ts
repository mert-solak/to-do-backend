import { validate } from 'class-validator';
import { values } from 'lodash';

import { CustomError } from '../utils';
import { CustomErrorsEnum } from '../enums';

export const handleErrors = async (dto) => {
  const validatorErrors = await validate(dto);

  const errorMessages: string[] = [];

  validatorErrors.forEach((error) => {
    errorMessages.push(...values(error.constraints));
  });

  if (errorMessages.length > 0) {
    throw new CustomError(CustomErrorsEnum.VALIDATION_ERROR, errorMessages.join(','));
  }
};
