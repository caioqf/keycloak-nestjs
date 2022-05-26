<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title>Ar-Online</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>

    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Área de Login</v-card-title>
        <v-card-text>
          <v-text-field
            label="Usuário"
            prepend-icon="mdi-account-circle"
          ></v-text-field>
          <v-text-field
            label="Senha"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Logar {{ info }}</v-btn>
          <v-btn color="info">Registrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
};
</script>

<style lang="scss" scoped></style>
