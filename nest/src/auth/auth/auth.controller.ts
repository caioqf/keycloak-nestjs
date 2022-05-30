import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'nestjs-keycloak-admin';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Post('login')
  // login(@Body() body) {
  //   return this.authService.login(body.username, body.password);
  // }

  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Esta informação é protegida na API. Se você está lendo, é porque possue um token válido!',
    };
  }
}

