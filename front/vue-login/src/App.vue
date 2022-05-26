<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title>Ar-Online</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>

    <v-main>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Área de Login</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="usernameForm"
            id="username"
            label="Usuário"
            prepend-icon="mdi-account-circle"
          ></v-text-field>
          <v-text-field
            v-model="passwordForm"
            id="password"
            label="Senha"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="submitLogin()" color="success">Logar</v-btn>
          <v-btn color="info">Registrar</v-btn>
        </v-card-actions>
      </v-card>
      <v-divider></v-divider>
      <v-card>
        <p>{{ info }}</p>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showPassword: false,
      info: null,
      usernameForm: "",
      passwordForm: "",
    };
  },
  methods: {
    submitLogin() {
      axios
        .post("http://localhost:3000/login", {
          username: this.usernameForm,
          password: this.passwordForm,
        })
        .then((response) => {
          console.log(response);
          this.info = {
            "Access-Token": response.data.access_token,
            "Refresh-Token": response.data.refresh_token,
            "Expires In": response.data.expires_in,
          };
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
