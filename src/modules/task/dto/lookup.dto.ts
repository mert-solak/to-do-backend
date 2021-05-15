import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class LookupDto {
  constructor(params: any) {
    this.filterBy = params.filterBy;
    this.search = params.search;
    this.limit = params.limit;
    this.offset = params.offset;
  }

  @IsOptional()
  @IsString()
  @Length(1, 254)
  filterBy?: string;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  search?: string;

  @IsOptional()
  @IsNumber()
  limit?: string;

  @IsOptional()
  @IsNumber()
  offset?: string;
}
