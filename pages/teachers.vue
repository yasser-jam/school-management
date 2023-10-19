<template>
  <v-container>
    <div class="text-h5 text-dark mb-4">Teachers Information</div>
    <v-card elevation="0">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex justify-space-between">
            <v-text-field placeholder="Search..."></v-text-field>
            <v-spacer></v-spacer>
            <v-btn variant="tonal" color="success" @click="$router.push('/teachers/create')">Add</v-btn>
          </v-col>
          <v-col cols="12">
            <client-only>
              <v-data-table-server
                v-model:items-per-page="itemsPerPage"
                :items-length="10"
                :headers="headers"
                :items="teachers"
                item-value="name"
              >
              <template v-slot:item.first_name="{ item }">
                <nuxt-link class="d-flex align-center">
                  <v-avatar image="https://randomuser.me/api/portraits/men/81.jpg" class="rounded-circle"></v-avatar>
                  <div class="ml-2">
                    <div class="text-subtitle-1 mb-0">{{ item.raw.first_name }} {{ item.raw.last_name }}</div>
                  </div>
  
                </nuxt-link>
              </template>
  
              <template v-slot:item.phone_number="{ item }">
                <v-chip :rounded="false" class="text-subtitle-1">{{ item.raw.phone_number }}</v-chip>
              </template>
  
              <template v-slot:item.saved_amount="{ item }">
                <div class="text-primary">
                  <span class="text-h6 font-weight-bold pb-2">{{ item.raw.saved_amount }}</span>
                  <span class="text-subtitle-2 mt-n-1 ml-1">page</span>
                </div>
              </template>
  
              <template v-slot:item.tested_amount="{ item }">
                <div class="text-success">
                  <span class="text-h6 font-weight-bold pb-2">{{ item.raw.tested_amount }}</span>
                  <span class="text-subtitle-2 mt-n-1 ml-1">part</span>
                </div>
              </template>
  
              <template v-slot:item.prev_mosques="{ item }">
                <!-- <div class="d-flex justify-between">
                  <v-chip v-for="(mos, index) in item.raw.prev_mosques" :key="index" size="small" color="success" class="rounded-sm">{{ mos }}</v-chip>
                </div> -->
              </template>
              
              <template v-slot:item.actions="{ item }">
                <v-btn variant="tonal" icon="mdi-delete-outline" class="rounded-lg mr-2" size="x-small" color="error" @click="teacherStore.remove(item.raw.id)"></v-btn>
                <v-btn variant="tonal" icon="mdi-pencil-outline" class="rounded-lg" size="x-small" color="primary" @click="$router.push(`/teachers/${item.raw.id}`)"></v-btn>
              </template>
  
            </v-data-table-server>
            </client-only>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
  <nuxt-page></nuxt-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTeacherStore } from '~/stores/teacher';

const teacherStore = useTeacherStore()

const { headers, teachers } = storeToRefs(teacherStore) 

const itemsPerPage = 5;

const { pending } = useLazyAsyncData(() => teacherStore.list())
</script>
