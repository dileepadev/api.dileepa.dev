import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EventDto {
  @ApiProperty({ description: 'The title of the event' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The date of the event' })
  @IsString()
  date: string;

  @ApiProperty({ description: 'The location of the event' })
  @IsString()
  location: string;

  @ApiProperty({ description: 'A description of the event' })
  @IsString()
  description: string;
}
