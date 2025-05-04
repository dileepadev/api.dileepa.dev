import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VideoDto {
  @ApiProperty({ description: 'The title of the video' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The view count of the video' })
  @IsString()
  views: string;

  @ApiProperty({ description: 'The publication date of the video' })
  @IsString()
  date: string;

  @ApiProperty({ description: 'The link to the video' })
  @IsString()
  link: string;

  @ApiProperty({ description: 'URL to the video thumbnail' })
  @IsString()
  thumbnail: string;
}
