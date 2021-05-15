import { IsString, Length } from 'class-validator';

export class DeleteDto {
  constructor(params: any) {
    this.id = params.id;
  }

  @IsString()
  @Length(24, 24)
  id: string;
}
