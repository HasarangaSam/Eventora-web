import {
  IsDateString,
  IsInt,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @MinLength(3)
  @MaxLength(150)
  title!: string;

  @IsString()
  @MinLength(20)
  @MaxLength(10000)
  description!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(200)
  venue!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(300)
  address!: string;

  @IsDateString()
  startsAt!: string;

  @IsDateString()
  endsAt!: string;

  @IsInt()
  @Min(1)
  maxCapacity!: number;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  categoryId!: string;
}
