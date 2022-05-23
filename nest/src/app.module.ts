import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
//decorator - Javascript - Ecmascript 7

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
