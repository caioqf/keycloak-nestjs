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
        <v-card-title class="justify-center">Área Privada!</v-card-title>
        <v-img
          max-height="300"
          max-width="300"
          class="mx-auto"
          alt="Vue logo"
          src="../src/assets/logo.png"
        />
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn class="mx-auto mt-9" @click="submitLogout()" color="success"
            >Logout</v-btn
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
<style lang="scss" scoped></style>
