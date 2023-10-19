<template>
  <v-window-item>
    <v-row>
      <v-col cols="12" class="mt-4">
        <div class="d-flex justify-space-between">
          <div class="text-h5 mb-4 text-dark font-weight-bold">
            Teacher Info
          </div>
        </div>
        <teacher-card></teacher-card>
      </v-col>

      <v-col cols="12" class="mt-4">
        <div class="d-flex justify-space-between">
          <div class="text-h5 mb-4 text-dark font-weight-bold">
            Students Info
          </div>
          <v-btn variant="tonal" color="secondary">Add</v-btn>
        </div>
        <div class="overflow-y-auto" style="max-height: 250px">
          <student-card></student-card>
          <student-card></student-card>
          <student-card></student-card>
          <student-card></student-card>
          <student-card></student-card>
          <student-card></student-card>
          <student-card></student-card>
          <student-card></student-card>
          <student-card></student-card>
        </div>
      </v-col>
    </v-row>
  </v-window-item>
</template>
