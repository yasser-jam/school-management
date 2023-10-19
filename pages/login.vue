<template>
  <v-card class="elevation-4 pa-2">
    <v-card-title> Login </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="username"
        label="Username"
        name="login"
        prepend-icon="mdi-account"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="password"
        id="password"
        label="Password"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="/signup">Sign up</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" variant="flat" :loading="loading" @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const { username, password } = storeToRefs(authStore);

const router = useRouter()

definePageMeta({
  layout: "login",
});

const loading = ref<boolean>(false)

const login = async () => {
    try {
        loading.value = true

        await authStore.login()

        router.push('/')

    } finally {
        loading.value = false
    }
}
</script>
