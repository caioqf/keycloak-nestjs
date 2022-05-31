# Instalação / Uso

Rode:

> _docker-compose up_

Inicia os containers necessarios para a POC.

#### Alterar o client_secret

- Em **_Clients_** vá na aba **_Credentials_**
  Clique em Regenerate Secret e copie o novo gerado.

- Agora no projeto, na pasta nest, abra o .env e altere o **KK_CLIENT_SECRET** e a propriedade **secret** em **KEYCLOAK_JSON** para a string gerada anteriormente

- Reinicie o container rodando o app Nest rodando docker

### Fluxo

**Login em**: http://localhost:8082

**Acesse com:**

> **username**: user
> **senha**: 123

ou

Você pode criar um **novo** usuário a partir do painel de admin

> - Acesse _https://localhost:8080_
> - Logue no painel com usuario **admin** e senha **admin**
>
> - Em _Users_, vá em _Add user_ e crie um usuario com email e username.
> - No seu usário, vá na aba credentials e defina uma senha para o mesmo.

### Uso

Agora acessando o [Front-end](http://localhost:8082) é possivel testar a POC.

Você será direcionado para a pagina de login do keycloak, nela, submetendo os dados corretamente, será automaticamente redirecionado para a parte autenticada da aplicação. Agora autenticado com os cookies recebidos do Keycloak, pode fazer livremente requisições à API, contato que tenha permissão necessária para a determinada rota.

Note que; se utilizar o token recebido no console, é possível fazer requisições de fora da aplicação front-end (i.e.: Insomnia, Postman), desde que a sessão não seja encerrada clicando no botão _Logout_
