import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BlogDto {
  @ApiProperty({ description: 'The title of the blog post' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The publication date of the blog post' })
  @IsString()
  date: string;

  @ApiProperty({ description: 'A short excerpt of the blog post' })
  @IsString()
  excerpt: string;

  @ApiProperty({ description: 'Estimated read time for the blog post' })
  @IsString()
  readTime: string;
}
