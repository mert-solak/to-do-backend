import { IsOptional, IsString, Length, IsDateString, IsUUID } from 'class-validator';

export class UpdateDto {
  constructor(body: any) {
    this.id = body.id;
    this.userName = body.userName;
    this.name = body.name;
    this.finishesAt = body.finishesAt;
    this.description = body.description;
  }

  @IsUUID(4)
  id: number;

  @IsString()
  @Length(1, 254)
  userName?: string;

  @IsString()
  @Length(1, 254)
  name?: string;

  @IsDateString()
  finishesAt?: string;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  description?: string;
}
