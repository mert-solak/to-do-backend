import { IsOptional, IsString, Length, IsDateString } from 'class-validator';

export class CreateDto {
  constructor(body: any) {
    this.name = body.name;
    this.userName = body.userName;
    this.status = body.status;
    this.finishesAt = body.finishesAt;
    this.description = body.description;
  }

  @IsString()
  @Length(1, 254)
  name: string;

  @IsString()
  @Length(1, 254)
  userName: string;

  @IsString()
  @Length(1, 254)
  status: string;

  @IsDateString()
  @IsOptional()
  finishesAt?: string;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  description?: string;
}
