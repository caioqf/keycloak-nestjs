# Instalação / Uso

> _docker-compose up_

Roda os containers necessarios para a POC.

### Configuração do Keycloak

O próximo passo é configurar o Keycloak, definindo os realms, clients e usuarios.

- Acesse _https://localhost:8080_
- Logue no painel com usuario **admin** e senha **admin**

Na barra lateral, na aba **manage**, clique em "Import" e selecione o arquivo _"realm-export.json"_ encontrado no projeto.

Em "If a resource exists" selecione "skip" e pressione **Import**.

### Fluxo

**Login em**: http://localhost:8082

**Acesse com:**

> **username**: user1@user.com > **senha**: 123456

**ou**

> Cadastre um novo usuário no Dashboard do Keycloak

**ou**

> Um dos metodos de **_OAuth 2.0_** disponíveis.
