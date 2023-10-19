<template>
  <v-card
    style="box-shadow: 0px 0px 20px 0px rgba(76, 87, 125, 0.02)"
    :class="props.finished ? 'bg-grey-lighten-3' : 'bg-white'"
  >
    <v-card-text class="d-flex align-center justify-space-between">
      <div class="text-subtitle-1 font-weight-bold text-dark">{{ props.item?.title }}</div>

      <v-avatar
        v-if="props.finished"
        color="primary"
        size="2rem"
        icon="mdi-check"
      >
      </v-avatar>

      <v-btn v-else size="small" color="primary" @click="$emit('attend')"
        >Attend</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  finished: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
  },
});
</script>
