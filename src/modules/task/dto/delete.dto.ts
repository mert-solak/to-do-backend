import { IsUUID } from 'class-validator';

export class DeleteDto {
  constructor(params: any) {
    this.id = params.id;
  }

  @IsUUID(4)
  id: string;
}
