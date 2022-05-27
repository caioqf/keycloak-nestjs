<template>
  <v-app>
    <v-app-bar app dark color="green">
      <v-toolbar-title class="mx-auto">Ar-Online</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>

    <v-main>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Área Privada!</v-card-title>
        <v-img
          max-height="300"
          max-width="300"
          class="mx-auto"
          alt="Vue logo"
          src="../src/assets/logo.png"
        />
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn class="mx-auto mt-9" @click="submitLogin()" color="success"
            >Logout</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>
<style lang="scss" scoped></style>
