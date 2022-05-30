# Instalação / Uso

> _docker-compose up_

Roda os containers necessarios para a POC.

### Configuração do Keycloak

O próximo passo é configurar o Keycloak, definindo os realms, clients e usuarios.

- Acesse _https://localhost:8080_
- Logue no painel com usuario **admin** e senha **admin**

Em _Users_, vá em _Add user_ e crie um usuario com email e username.

No seu usário, vá na aba credentials e defina uma senha para o mesmo.

### Fluxo

**Login em**: http://localhost:8082

**Acesse com:**

> **username**: {SEU_USERNAME_CRIADO}
> **senha**: {SUA_SENHA_CRIADA}

**ou**

> Cadastre um novo usuário no Dashboard do Keycloak

**ou**

> Um dos metodos de **_OAuth 2.0_** disponíveis.
