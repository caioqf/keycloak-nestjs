<template>
  <v-app>
    <v-app-bar app dark color="green">
      <v-toolbar-title>Ar-Online</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>

    <v-main>
      <v-card width="500" class="mx-auto mt-9">
        <h1 class="justify-center">Área Privada!</h1>
        <v-img
          max-height="300"
          max-width="300"
          class="mx-auto"
          alt="Vue logo"
          src="../src/assets/logo.png"
        />
        <p class="text-center">
          Bem-vindo! Esta é uma página protegida pelo login do <b>Keycloak</b>.
          Apénas os usuários devidamente <b>cadastrados</b> e
          <b>autenticados</b> pelo keycloak podem ver este conteúdo.
        </p>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn class="mx-auto mt-9" @click="submitLogout()" color="success"
            >Logout</v-btn
          >
          <v-btn class="mx-auto mt-9" @click="sendAuthRequest()" color="info"
            >API Request</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "home-page",
  props: ["keycloak"],

  mounted() {
    console.log(this.keycloak);
  },
  methods: {
    submitLogout() {
      const logoutOptions = {
        redirectUri: "http://localhost:8082",
      };
      this.keycloak.logout(logoutOptions).then((success) => {
        console.log("Deslogado", success);
      });
      localStorage.clear();
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
  margin-top: 30px;
  color: #42b983;
  font-size: 1.2rem;
  padding: 8px;
  border-radius: 6px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
