<template>
  <v-card
    style="box-shadow: 0px 0px 20px 0px rgba(76, 87, 125, 0.02)"
    class="bg-white"
  >
    <v-card-text class="d-flex items-center">
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex align-center">
            <v-icon color="primary" size="x-large" class="mr-2"
              >mdi-account</v-icon
            >
            <div class="text-subtitle-1 font-weight-medium"></div>
              <v-chip size="small" color="primary">{{ props.item._count.registrations }}</v-chip>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex align-center">
            <v-icon color="warning" size="x-large" class="mr-2"
              >mdi-book</v-icon
            >
            <div class="text-subtitle-1 font-weight-medium"></div>
            <v-chip size="small" color="warning">{{ props.item.sessions.length }}</v-chip>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex align-center">
            <v-icon color="info" size="x-large" class="mr-2"
              >mdi-calendar-range</v-icon
            >
            <div class="text-subtitle-1 font-weight-medium"></div>
            <v-chip size="small" color="info">{{ startDate }}</v-chip>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
const val = ref(30)

const props = defineProps({
  item: {
    type: Object
  }
})
const startDate = computed(() => `${props.item.createdAt.split('-')[0]}-${props.item.createdAt.split('-')[1]}`)
</script>