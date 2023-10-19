<template>
  <base-dialog @save="submit" :loading="pending">
    <template #title>Add Student</template>
    <v-form>
      <v-row>
        <v-col cols="12" class="py-0">
          <v-row class="align-center mb-2">
            <v-col cols="12" md="3" class="py-0">
              <v-responsive
                class="bg-grey-lighten-2 rounded-lg"
                width="200"
                height="150"
              ></v-responsive>
            </v-col>
            <v-col cols="12" md="9" class="py-0">
              <v-row>
                <v-col cols="12" md="6" class="py-0">
                  <base-label>First Name</base-label>
                  <v-text-field
                    v-model="student.first_name"
                    placeholder="First Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <base-label>Last Name</base-label>
                  <v-text-field
                    v-model="student.last_name"
                    placeholder="First Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <base-label>Father Name</base-label>
                  <v-text-field
                    v-model="student.father_name"
                    placeholder="Father Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <base-label>Address</base-label>
                  <v-text-field v-model="student.address" placeholder="Address"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <base-label>Saves (by part)</base-label>
          <v-text-field
            v-model.number="student.saved_amount"
            type="number"
            placeholder="Saves"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <base-label>Tested (by part)</base-label>
          <v-text-field
            v-model.number="student.tested_amount"
            type="number"
            placeholder="Tested"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
            <base-label>Previous Mosques</base-label>
            <mosque-lookup v-model="student.prev_mosques" multiple></mosque-lookup>
        </v-col>
      </v-row>
    </v-form>
  </base-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStudentStore } from "~/stores/student";

const studentStore = useStudentStore();

const { student } = storeToRefs(studentStore);

const router = useRouter();
const route = useRoute();

const editMode: boolean = route.params.id != "create";
const loading = ref<boolean>(false);

// reset student
studentStore.reset()

const { pending } = useLazyAsyncData(() => {
  if (editMode) return studentStore.get(Number(route.params.id));
  return Promise.resolve();
});

const submit = async () => {
  try {
    loading.value = true;

    editMode ? studentStore.update() : studentStore.create();
  } finally {
    loading.value = false;
    back();
  }
};

const back = () => {
  router.replace("/students");
};
</script>
