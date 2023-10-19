import { defineStore } from 'pinia';

import { api } from './../composables/api';

import { useToasterStore } from './toaster';

export const useClassStore = defineStore('class', () => {

    const toasterStore = useToasterStore()

    const attendenceClasses = ref<any>([])
    const unRegisteredClasses = ref<any>([])
    
    const classItem = ref<any>(null)

    const attendClass = ref<any>(null)

    const listAttendence = async () => {
        try {
            
            const res = await api('get-attendance')

            attendenceClasses.value = res

        } catch (error) {
            console.log(error);
        }
    }

    const listUnregestired = async () => {
        try {
            
            const res = await api('get-user-unregister-class')

            unRegisteredClasses.value = res

        } catch (error) {
            console.log(error);
        }
    }

    const get = async (id: number) => {
        try {

            const res = await api(`class/${id}`)

            classItem.value = res

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const getAttendenceClass = async (id: number) => {
        try {

            const res = await api(`get-attendance-class/${id}`)

            attendClass.value = res

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const register = async (id: number) => {
        try {

            await api(`register-in-class`, {
                method: 'POST',
                body: {
                    classId: id
                }
            })

            toasterStore.showSuccessToaster('Registered Successfuly!')


        } catch (error) {
            console.log(error);
            throw error
        }
    }


    const attend = async (classId: number, sessionId: number) => {
        try {

            await api('attend-session', {
                method: 'POST',
                body: {
                    classId: classId,
                    sessionId: sessionId
                }
            })

            // reget attend class data
            await getAttendenceClass(classId)

            toasterStore.showSuccessToaster('Attended Successfuly!')

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    return {
        attendenceClasses,
        unRegisteredClasses,
        classItem,
        attendClass,
        listAttendence,
        listUnregestired,
        get,
        getAttendenceClass,
        register,
        attend
    }
})