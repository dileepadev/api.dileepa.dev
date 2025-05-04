import {
  IsString,
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class LogoDto {
  @ApiProperty({
    description: 'URL to the logo for light mode',
    example:
      'https://dileepadev.blob.core.windows.net/images/communities/nibmcs.svg',
  })
  @IsUrl()
  light: string;

  @ApiProperty({
    description: 'URL to the logo for dark mode',
    example:
      'https://dileepadev.blob.core.windows.net/images/communities/nibmcs.svg',
  })
  @IsUrl()
  dark: string;
}

export class CommunityDto {
  @ApiProperty({ description: 'The name of the community' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The role held in the community' })
  @IsString()
  role: string;

  @ApiProperty({ description: 'The period of involvement' })
  @IsString()
  period: string;

  @ApiProperty({ description: 'A description of the community involvement' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Community logo URLs', type: LogoDto })
  @ValidateNested()
  @Type(() => LogoDto)
  logo: LogoDto;

  @ApiProperty({ description: 'Whether currently involved', required: false })
  @IsBoolean()
  @IsOptional()
  current?: boolean;
}
