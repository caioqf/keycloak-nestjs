import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import KeycloakModule, { AuthGuard } from 'nestjs-keycloak-admin';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),
    KeycloakModule.registerAsync({
      useFactory: () => {
        const keycloakConfig = JSON.parse(process.env.KEYCLOAK_JSON);       
        return {
            baseUrl: keycloakConfig['auth-server-url'],
            realmName: keycloakConfig['realm'],
            clientId: keycloakConfig['resource'],
            clientSecret: keycloakConfig['credentials']['secret'],
        }
      }
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard}],
})
export class AppModule {}
