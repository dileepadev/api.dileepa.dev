import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExperiencesModule } from './experiences/experiences.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_CONNECTION_STRING'),
      }),
      inject: [ConfigService],
    }),
    AboutModule,
    ExperiencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
