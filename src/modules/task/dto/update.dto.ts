import { IsOptional, IsString, Length, IsDateString } from 'class-validator';

export class UpdateDto {
  constructor(body: any) {
    this._id = body._id;
    this.name = body.name;
    this.userName = body.userName;
    this.status = body.status;
    this.finishesAt = body.finishesAt;
    this.description = body.description;
  }

  @IsString()
  @Length(24, 24)
  _id: number;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  userName?: string;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  status?: string;

  @IsOptional()
  @IsDateString()
  finishesAt?: string;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  description?: string;
}
