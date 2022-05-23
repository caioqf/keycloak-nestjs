import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(this.httpService.post('http://host.docker.internal:8080/auth/realms/aronline/protocol/openid-connect/token', new URLSearchParams({
      client_id: 'nest',
      client_secret: 'e7767e67-649b-46b1-8abd-294d7cccb2a4',
      grant_type: 'password',
      username,
      password
    }),
    ),
    );
    return data;
  }
}


// client_id=nest
// &client_secret=e7767e67-649b-46b1-8abd-294d7cccb2a4
// &grant_type=password
// &username=user1@user.com
// &password=123456