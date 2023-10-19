<template>
  <v-container>
    <v-row>
      <v-col class="my-2" cols="12">
        <strong class="text-h5 text-dark">My Courses</strong>
      </v-col>

      <v-col v-for="item in attendenceClasses" cols="6" md="2" class="my-2">
        <class-card :item="item" finished></class-card>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col class="my-2" cols="12">
        <strong class="text-h5 text-dark">Courses</strong>
      </v-col>
      <v-col v-for="item in unRegisteredClasses" cols="6" md="2" class="my-2">
        <class-card :item="item" link="classes" @enroll="register(item.id)"></class-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useClassStore } from '~/stores/class';

const classStore = useClassStore()

const router = useRouter()
const route = useRoute()

const loading = ref<boolean>(false)

const { attendenceClasses, unRegisteredClasses } = storeToRefs(classStore)

useLazyAsyncData(() => {
  return Promise.all([
    classStore.listAttendence(),
    classStore.listUnregestired()
  ])
})

const register = async (id:number) => {
  try {
    loading.value = true

    await classStore.register(Number(id))

    router.push(`/classes/${id}`)

  } finally {
    loading.value = false
  }
}

definePageMeta({
  layout: "custom",
});
</script>
