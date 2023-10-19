import { Teacher } from '~/types/index';
import { defineStore } from "pinia";

export const useTeacherStore = defineStore('teacher', () => {
    
    const defaultTeacher:Teacher  = {
        id: null,
        first_name: '',
        last_name: '',
        father_name: '',
        address: '',
        prev_mosques: [],
        saved_amount: 0,
        tested_amount: 0,
        is_mojaz: false,
        age: 0,
        phone_number: '',
        password: '',
        halakah: null
    }

    const headers = ref([
      { title: 'Name', key: 'first_name' },
      { title: "Saved", key: "saved_amount" },
      { title: "Tested", key: "tested_amount" },
      { title: "Phone Number", key: "phone_number" },
      { title: "", key: "actions" },
    ]);

    const teacher = ref<Teacher>({ ...defaultTeacher })

    // Todo: change type
    const teachers = ref<any>([])

    // Todo: find a better way to reset
    const reset = () => {
        teacher.value = { ...defaultTeacher }
    }
  
    const list = async () => {
        try {

            const res = await api('teachers')

            teachers.value = res

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const get = async (id:number) => {
        try {

            const res = await api(`teachers/${id}`) as Teacher

            teacher.value = res

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const teacherData = computed(() => ({
        id: teacher.value.id,
        first_name: teacher.value.first_name,
        last_name: teacher.value.last_name,
        father_name: teacher.value.father_name,
        address: teacher.value.address,
        prev_mosques: JSON.stringify(teacher.value.prev_mosques),
        saved_amount: teacher.value.saved_amount,
        tested_amount: teacher.value.tested_amount,
        is_mojaz: teacher.value.is_mojaz,
        age: teacher.value.age,
        phone_number: teacher.value.phone_number,
        password: teacher.value.password
    }))

    const create = async () => {
        try {

            await api('teachers', {
                method: 'POST',
                body: teacherData.value,
            })

            // relist all teachers
            await list()

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const remove = async (id:number) => {
        try {
            await api(`teachers/${id}`, {
                method: 'DELETE'
            })

            // relist all teachers
            await list()
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const update = async () => {
        try {
            
            await api(`teachers/${teacher.value.id}`, {
                method: 'PUT',
                body: teacherData.value
            })

            // relist all teachers
            await list()
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    return {
        teacher,
        teachers,
        headers,
        reset,
        list,
        get,
        create,
        remove,
        update
    }
})