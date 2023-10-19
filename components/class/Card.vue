<template>
  <v-card>
    <div
      class="card bg-white rounded d-flex flex-column align-center justify-center position-relative px-4"
    >
      <!-- <v-btn color="red" density="compact" variant="text" class="icon px-2" size="small" icon="mdi-heart"></v-btn> -->

      <v-avatar
        size="md"
        icon="mdi-notebook"
        class="pa-4 mb-2 text-white"
        :class="`bg-${color}`"
      ></v-avatar>

      <div
        class="text-subtitle-1 mt-2 font-weight-bold mb-6"
        :class="`text-${color}`"
      >
        {{ props.item.name }}
      </div>


      <template v-if="props.finished">
        <v-progress-linear
          :model-value="props.item.percentage"
          :color="color"
          height="10"
          class="mt-4 rounded"
        >
        </v-progress-linear>
  
        <v-btn :color="color" density="compact" class="text-white mt-6" variant="flat" :to="`classes/${props.item.id}`">Details</v-btn>
      </template>


      <div v-else class="action">
        <v-btn :color="color" density="compact" class="text-white" variant="flat" @click="$emit('enroll')">Enroll</v-btn>
      </div>
    </div>
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
    required: true
  },
  link: {
    type: String
  }
});

const color = computed(() => (props.finished ? "primary" : "amber"));

</script>

<style scoped>
.card {
  height: 250px;
}

.action {
  position: absolute;
  bottom: 15px;
}

.icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
