<template>
  <v-app id="inspire">
    <v-main style="background: rgb(147,197,253);
background: linear-gradient(160deg, rgba(147,197,253,1) 50%, rgba(50,86,156,1) 100%);" class="w-full h-full d-flex align-center">
      <v-container class="" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
