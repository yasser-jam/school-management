import { Mosque } from './../types/index';
import { Student } from '~/types/index';
import { defineStore } from "pinia";

export const useStudentStore = defineStore('student', () => {
    
    const defaultStudent:Student  = {
        id: null,
        first_name: '',
        last_name: '',
        father_name: '',
        address: '',
        prev_mosques: [],
        saved_amount: 0,
        tested_amount: 0
    }

    const headers = ref([
      { title: 'الاسم', key: 'first_name' },
      { title: "اسم الأب", key: "father_name" },
      { title: "المحفوظات", key: "saved_amount" },
      { title: "المقدار المسبور", key: "tested_amount" },
      { title: "المساجد السابقة", key: "prev_mosques" },
      { title: "", key: "actions" },
    ]);

    const student = ref<Student>({ ...defaultStudent })

    // Todo: change type
    const students = ref<any>([])

    // Todo: find a better way to reset
    const reset = () => {
        student.value = { ...defaultStudent }
    }
  
    const list = async () => {
        try {

            const res = await api('students')

            students.value = res

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const get = async (id:number) => {
        try {

            const res = await api(`students/${id}`) as Student

            student.value = res

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const studentData = computed(() => ({
        id: student.value.id,
        first_name: student.value.first_name,
        last_name: student.value.last_name,
        father_name: student.value.father_name,
        address: student.value.address,
        prev_mosques: JSON.stringify(student.value.prev_mosques?.map((el:any) => el.name)),
        saved_amount: student.value.saved_amount,
        tested_amount: student.value.tested_amount
    }))

    const create = async () => {
        try {

            const res = await api('students', {
                method: 'POST',
                body: studentData.value
            })

            // relist all students
            await list()

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const update = async () => {
        try {

            await api(`students/${student.value.id}`, {
                method: 'PUT',
                body: studentData.value
            })

            // relist all students
            await list()

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const remove = async (id:number) => {
        try {
            
            await api(`students/${id}`, {
                method: 'DELETE'
            })

            // relist all students
            await list()

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    return {
        student,
        students,
        headers,
        reset,
        list,
        get,
        update,
        create,
        remove
    }
})