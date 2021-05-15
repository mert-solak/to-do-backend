import { CustomErrorsEnum } from '../enums';

export class CustomError extends Error {
  readonly name: string;
  readonly message: string = 'Internal Server Error';
  readonly errorCode: number = CustomErrorsEnum.UNHANDLED_ERROR;
  readonly status: number = 500;

  constructor(type: CustomErrorsEnum, arg?: string, statusCode?: number) {
    super();

    this.name = CustomErrorsEnum[type];
    this.errorCode = type;

    switch (type) {
      case CustomErrorsEnum.VALIDATION_ERROR:
        this.message = arg;
        this.status = statusCode || 400;
        break;

      case CustomErrorsEnum.DATA_NOT_EXISTS:
        this.message = `${arg || 'data'} not exists`;
        this.status = statusCode || 404;
        break;

      default:
    }
  }
}
