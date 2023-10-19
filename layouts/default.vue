<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer" 
        color="dark"
        permanent
        class="py-4"
      >

        <v-list density="compact" nav>
          <v-list-item class="mb-2" prepend-icon="mdi-book-account-outline" title="دوراتي" link to="/halakat"></v-list-item>
          <v-list-item class="mb-2" prepend-icon="mdi-pen" title="All" link to="/classes"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar color="white">

      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="text-dark">حلقات</v-toolbar-title>
    </v-app-bar>

    <v-main class="bg-surface-lighten-1"> 
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

<style>
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: 0px 0px 10px rgba(113, 121, 136, 0.1)
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #ececec; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #cecece; 
}
</style>
