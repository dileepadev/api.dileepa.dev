import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsObject, ValidateNested, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

class ImagesDto {
  @ApiProperty({
    description: 'URL for the banner image in WEBP format',
    example: 'https://dileepadev.blob.core.windows.net/images/banner.webp',
  })
  @IsUrl()
  readonly bannerWebp: string;

  @ApiProperty({
    description: 'URL for the profile image in PNG format',
    example: 'https://dileepadev.blob.core.windows.net/images/profile.png',
  })
  @IsUrl()
  readonly profilePng: string;

  @ApiProperty({
    description: 'URL for the profile image in WEBP format',
    example: 'https://dileepadev.blob.core.windows.net/images/profile.webp',
  })
  @IsUrl()
  readonly profileWebp: string;
}

class LinksDto {
  @ApiProperty({
    description: 'URL for the website',
    example: 'https://dileepa.dev',
  })
  @IsUrl()
  readonly website: string;

  @ApiProperty({
    description: 'Contact email address',
    example: 'contact@dileepa.dev',
  })
  @IsUrl()
  readonly email: string;

  @ApiProperty({
    description: 'URL for the GitHub profile',
    example: 'https://github.com/dileepadev',
  })
  @IsUrl()
  readonly github: string;

  @ApiProperty({
    description: 'URL for the LinkedIn profile',
    example: 'https://linkedin.com/in/dileepadev',
  })
  @IsUrl()
  readonly linkedin: string;

  @ApiProperty({
    description: 'URL for the X/Twitter profile',
    example: 'https://twitter.com/dileepadev',
  })
  @IsUrl()
  readonly xtwitter: string;

  @ApiProperty({
    description: 'URL for the Instagram profile',
    example: 'https://instagram.com/dileepadev',
  })
  @IsUrl()
  readonly instagram: string;

  @ApiProperty({
    description: 'URL for the YouTube channel',
    example: 'https://youtube.com/@dileepadev',
  })
  @IsUrl()
  readonly youtube: string;
}

export class AboutDto {
  @ApiProperty({
    description: 'The name of the person',
    example: 'Dileepa Bandara',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'A short description about the person',
    example: "Hi! I'm an associate ai engineer focusing on...",
  })
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'Contact email address',
    example: 'contact@dleepa.dev',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: 'Job title',
    example: 'Associate AI Engineer',
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'URLs for profile and banner images',
    type: ImagesDto,
  })
  @IsObject()
  @ValidateNested()
  @Type(() => ImagesDto)
  readonly images: ImagesDto;

  @ApiProperty({
    description: 'URLs for social and contact links',
    type: LinksDto,
  })
  @IsObject()
  @ValidateNested()
  @Type(() => LinksDto)
  readonly links: LinksDto;
}
