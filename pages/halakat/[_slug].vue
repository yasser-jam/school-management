<template>
  <v-container>
    <v-col cols="12" class="d-flex flex-column align-center mb-4">
      <v-responsive
        width="150"
        height="150"
        class="bg-grey-lighten-4 mb-2 rounded-circle"
      ></v-responsive>
      <div class="text-h5 text-primary">
        Yasser Jamal Al-Deen
        <v-icon size="x-small" color="primary">mdi-check-circle</v-icon>
      </div>
      <div class="text-grey mt-1">yasserjamalaldeen@gmail.com</div>
    </v-col>

    <v-tabs color="primary" align-tabs="center">
      <v-tab to="/halakat/osm/info" class="mr-4">Personal Info</v-tab>
      <v-tab to="/halakat/osm/statistics">Statistics</v-tab>
    </v-tabs>
    <v-window>
      <nuxt-page></nuxt-page>
    </v-window>
  </v-container>
</template>

<script setup lang="ts"></script>
