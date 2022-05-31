import { Controller, Get } from '@nestjs/common';
import { Public } from 'nestjs-keycloak-admin';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Public()
  @Get('test')
  metodo1(){
    return 'qualquer coisa';
  }
}
