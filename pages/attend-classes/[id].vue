<template>
  <template v-if="!attendClass">
    loading...
  </template>
  <v-container v-if="attendClass">
    <v-row>
      <v-col cols="12" class="mt-4">
        <div class="text-h5 mb-4 text-dark font-weight-bold">
          {{ attendClass.name }}
        </div>
        <class-info :item="attendClass"></class-info>
      </v-col>

      <v-col cols="12" class="mt-4">
        <div class="text-subtitle-1">Progress</div>
        <v-progress-linear
        :model-value="attendClass.percentage"
        :color="color"
          height="10"
          class="mt-4 rounded"
        >
        </v-progress-linear>
      </v-col>

      <v-col cols="12" class="mt-8">
        <div class="d-flex justify-space-between">
          <div class="text-h5 mb-4 text-dark font-weight-bold">Sessions</div>
        </div>
        <class-session
          v-for="item in attendClass.sessions"
          :key="item"
          :item="item"
          class="my-2"
          @attend="attend(item.id)"
          :loading="loading"
        ></class-session>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useClassStore } from "~/stores/class";

const classStore = useClassStore();

const { attendClass } = storeToRefs(classStore);

definePageMeta({
  layout: "custom",
});

const router = useRouter();
const route = useRoute();

const val = ref(45);

const props = defineProps({
  finished: {
    type: Boolean,
    default: false,
  }
});

const loading = ref<boolean>(false);

useLazyAsyncData(() => classStore.getAttendenceClass(Number(route.params.id)));

const color = computed(() => (props.finished ? "primary" : "amber"));


const attend = async (sessionId: number) => {
  try {
    loading.value = true

    await classStore.attend(Number(route.params.id), sessionId)

  } finally {
    loading.value = false
  }
}

</script>
