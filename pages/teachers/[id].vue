<template>
    <base-dialog :loading="pending" @save="submit">
        <template #title>Add Teacher</template>
        <v-form>
            <v-row>
                <v-col cols="12" class="py-0">
                    <v-row class="align-center mb-2">
                        <v-col cols="12" md="3" class="py-0">
                            <v-responsive class="bg-grey-lighten-2 rounded-lg" width="200" height="150"></v-responsive>
                        </v-col>
                        <v-col cols="12" md="9" class="py-0">
                            <v-row>
                                <v-col cols="12" md="6" class="py-0">
                                    <div class="text-subtitle-2 font-weight-medium">First Name</div>
                                    <v-text-field v-model="teacher.first_name" placeholder="First Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="py-0">
                                    <div class="text-subtitle-2 font-weight-medium">Last Name</div>
                                    <v-text-field v-model="teacher.last_name" placeholder="Last Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="py-0">
                                    <div class="text-subtitle-2 font-weight-medium">Father Name</div>
                                    <v-text-field v-model="teacher.father_name" placeholder="Father Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="py-0">
                                    <div class="text-subtitle-2 font-weight-medium">Address</div>
                                    <v-text-field v-model="teacher.address" placeholder="Address"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                
                <v-col cols="12" class="py-0">
                    <base-label>Phone Number</base-label>
                    <v-text-field v-model.number="teacher.phone_number" type="number" placeholder="Phone Number"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                    <base-label>Saves (by part)</base-label>
                    <v-text-field v-model.number="teacher.saved_amount" type="number" placeholder="Saves"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                    <base-label>Tested (by part)</base-label>
                    <v-text-field v-model.number="teacher.tested_amount" type="number" placeholder="Tested"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                    <v-switch v-model="teacher.is_mojaz" label="Mojaz" color="primary"></v-switch>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                    <base-label>Age</base-label>
                    <v-text-field v-model.number="teacher.age" type="number" placeholder="age"></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                    <base-label>Password</base-label>
                    <v-text-field v-model="teacher.password"></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </base-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTeacherStore } from '~/stores/teacher';

const teacherStore = useTeacherStore()

const { teacher } = storeToRefs(teacherStore)

const route = useRoute()
const router = useRouter()

const loading = ref<boolean>(false)

const editMode:boolean = route.params.id != 'create'

// reset
teacherStore.reset()

const { pending } = useLazyAsyncData(() => {
    if (editMode) return teacherStore.get(Number(route.params.id))
    return Promise.resolve()
})

const submit = async () => {
    try {

        loading.value = true
        
        editMode
        ? await teacherStore.update()
        : await teacherStore.create()
        
    } finally {
        loading.value = false
        back()
    }
}

const back = () => {
    router.replace('/teachers')
}

</script>