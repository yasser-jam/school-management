<template>
  <v-card style="box-shadow: 0px 0px 20px 0px rgba(76, 87, 125, 0.02)" class="bg-white">
    <v-card-text>
      <v-row class="d-flex mt-4">
        <v-col cols="6">
          <div class="d-flex items-center justify-center flex-wrap mr-8">
            <div class="d-flex my-4 align-center" style="flex-basis: 30%">
              <v-icon
                color="primary"
                size="x-large"
                icon="mdi-account"
              ></v-icon>
              <span class="ml-2 font-weight-bold text-primary text-h5">3</span>
            </div>
            <div class="d-flex my-4 align-center" style="flex-basis: 30%">
              <v-icon
                color="primary"
                size="x-large"
                icon="mdi-account-group"
              ></v-icon>
              <span class="ml-2 font-weight-bold text-primary text-h5">25</span>
            </div>
          </div>
          <div class="d-flex items-center justify-center flex-wrap mr-8">
            <div class="d-flex my-4 align-center" style="flex-basis: 30%">
              <v-icon
                color="primary"
                size="x-large"
                icon="mdi-license"
              ></v-icon>
              <span class="ml-2 font-weight-bold text-primary text-h5">5</span>
            </div>
            <div class="d-flex my-4 align-center" style="flex-basis: 30%">
              <v-icon color="primary" size="x-large" icon="mdi-note"></v-icon>
              <span class="ml-2 font-weight-bold text-primary text-h5"
                >540</span
              >
            </div>
          </div>
          <div class="d-flex items-center justify-center flex-wrap mr-8">
            <div class="d-flex my-4 align-center" style="flex-basis: 30%">
              <v-icon
                color="primary"
                size="x-large"
                icon="mdi-book-account"
              ></v-icon>
              <span class="ml-2 font-weight-bold text-primary text-h5">25</span>
            </div>
            <div class="d-flex my-4 align-center" style="flex-basis: 30%">
              <v-icon
                color="primary"
                size="x-large"
                icon="mdi-counter"
              ></v-icon>
              <span class="ml-2 font-weight-bold text-primary text-h5"
                >10000</span
              >
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <v-responsive
            height="200"
            class="w-full h-full bg-grey-lighten-2"
          ></v-responsive>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
