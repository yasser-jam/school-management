<template>
  <v-card
    style="box-shadow: 0px 0px 20px 0px rgba(76, 87, 125, 0.02)"
    class="bg-white"
  >
    <v-card-text class="d-flex items-center">
      <v-row>
        <v-col cols="12" md="4">
            <div class="d-flex align-center mb-4">
                <v-icon color="info" size="x-large" class="mr-2">mdi-calendar-range</v-icon>
                <div class="text-subtitle-1 font-weight-medium"></div>
                <v-chip size="small" color="info">20 years</v-chip>
            </div>
            <div class="d-flex align-center mb-4">
                <v-icon color="primary" size="x-large" class="mr-2">mdi-school</v-icon>
                <v-chip size="small" color="primary">Medicine School</v-chip>
            </div>
            <div class="d-flex align-center mb-4">
                <v-icon color="success" size="x-large" class="mr-2">mdi-calendar-range</v-icon>
                <div>
                    <v-chip color="success" size="small" class="mx-2">Sat</v-chip>
                    <v-chip color="success" size="small" class="mx-2">Sun</v-chip>
                    <v-chip color="success" size="small" class="mx-2">Mon</v-chip>
                </div>
            </div>
        </v-col>
        <v-col cols="12" md="4">
            <div class="d-flex align-center mb-4">
                <v-icon color="primary" size="x-large" class="mr-2">mdi-book</v-icon>
                <v-chip color="primary" size="small">30 part</v-chip>
            </div>
            <div class="d-flex align-center mb-4">
                <v-icon color="primary" size="x-large" class="mr-2">mdi-book</v-icon>
                <div>
                    <v-chip color="primary" size="small" class="mx-2">test - 1</v-chip>
                    <v-chip color="primary" size="small" class="mx-2">test - 2</v-chip>
                    <v-chip color="primary" size="small" class="mx-2">test - 3</v-chip>
                </div>
            </div>
            <div class="d-flex align-center mb-4">
                <v-icon color="warning" size="x-large" class="mr-2">mdi-alert</v-icon>
                <v-chip color="warning" size="small">5</v-chip>
            </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
