import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(this.httpService.post('http://host.docker.internal:8080/auth/realms/aronline/protocol/openid-connect/token', new URLSearchParams({
      client_id: 'nest',
      client_secret: '5d0bfd1e-a1cb-474f-b177-3c9fb54dfe44',
      grant_type: 'password',
      username,
      password,
    }),
    ),
    );
    return data;
  }
}