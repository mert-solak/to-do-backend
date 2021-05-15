import { IsOptional, IsString, Length, IsDateString } from 'class-validator';

export class CreateDto {
  constructor(body: any) {
    this.userName = body.userName;
    this.name = body.name;
    this.finishesAt = body.finishesAt;
    this.description = body.description;
  }

  @IsString()
  @Length(1, 254)
  userName: string;

  @IsString()
  @Length(1, 254)
  name: string;

  @IsDateString()
  finishesAt: string;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  description?: string;
}
