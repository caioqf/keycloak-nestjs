import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(this.httpService.post('http://host.docker.internal:8080/auth/realms/aronline/protocol/openid-connect/token', new URLSearchParams({
      client_id: 'nest',
      client_secret: process.env.KK_CLIENT_SECRET,
      grant_type: 'password',
      username,
      password,
    }),
    ),
    );
    return data;
  }
}