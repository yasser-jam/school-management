<template>
  <v-card class="elevation-4 pa-2">
    <v-card-title> Sign Up </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="username"
        label="Username"
        name="login"
        prepend-icon="mdi-account"
        type="text"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        v-model="email"
        id="email"
        label="Email"
        name="email"
        prepend-icon="mdi-at"
        type="email"
        :rules="[rules.required, rules.email]"
      ></v-text-field>
      <v-text-field
        v-model="password"
        id="password"
        label="Password"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
        :rules="[rules.required, rules.password]"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="/login">Login</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" variant="flat" @click="signup" :loading="loading">Sign up</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const router = useRouter()

const { username, email, password } = storeToRefs(authStore);

const loading = ref<boolean>(false);

const rules = {
  required: (value: any) => !!value || "Required.",
  email: (value: any) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
  password: (value: any) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$/;
    return regex.test(value) || 'Too Week Password'
  }
};

const signup = async () => {
  try {
    loading.value = true;

    await authStore.signup();
  
    router.push('/')

  } finally {
    loading.value = false;
  }
};

definePageMeta({
  layout: "login",
});
</script>
