<template>
  <v-app id="inspire">
    <v-app-bar color="blue" height="55">

      <v-app-bar-title class="width-full" style="">
        <div class="d-flex justify-content-between width-full" style="width: 100%">
          <div class="text-h6">
            Students Attendence System
          </div>
        </div>
      </v-app-bar-title>
      <v-btn variant="tonal" @click="logout">Logout</v-btn>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" temporary>
    </v-navigation-drawer> -->

    <v-main class="" style="background: #fcfcfc">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";

const router = useRouter()

const authStore = useAuthStore()

const logout = () => {
  authStore.logout()

  router.push('/login')

}

</script>
<style>
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: 0px 0px 10px rgba(113, 121, 136, 0.1);
}
</style>
