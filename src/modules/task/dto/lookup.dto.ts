import { IsOptional, IsString, Length } from 'class-validator';

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
  @IsString()
  @Length(1, 3)
  limit?: string;

  @IsOptional()
  @IsString()
  @Length(1, 3)
  offset?: string;
}
