import { IsString, Length } from 'class-validator';

export class DeleteDto {
  constructor(params: any) {
    this._id = params._id;
  }

  @IsString()
  @Length(24, 24)
  _id: string;
}
