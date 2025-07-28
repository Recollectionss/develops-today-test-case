import {
  IsArray,
  IsString,
  IsOptional,
  IsISO31661Alpha2,
  IsInt,
  Min,
} from 'class-validator';

export class AddHolidaysDto {
  @IsISO31661Alpha2()
  countryCode: string;

  @IsInt()
  @Min(1900)
  year: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  holidays?: string[];
}
